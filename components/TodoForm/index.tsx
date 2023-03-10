import { Button, Icon, Input, List, ListItem } from '@mui/material';
import { Main, TodoItem } from './styles';
import { ChangeEvent, useCallback, useState } from 'react';
import { ITodoType } from 'types/TodoTypes';
import { Clear, Edit, Remove } from '@mui/icons-material';
import Checkbox from '../CheckBox';

const TodoForm = ({ todos }: any) => {
  const [todo, setTodo] = useState<string>('');
  const [curTodo, setCurTodo] = useState<ITodoType[]>(todos);

  const loadCurTodoData = () => {
    fetch('/api/test')
      .then((res) => res.json())
      .then((data) => {
        setCurTodo(data.message);
      });
  };

  const onChangeTodo = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }, []);

  const onHandleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await fetch('/api/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ val: todo }),
    }).then(() => {
      loadCurTodoData();
    });
    setTodo('');
  };

  const onClickDelete = async (todoId: number, e: React.SyntheticEvent) => {
    fetch('/api/test', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: todoId,
      }),
    }).then(() => {
      setCurTodo(curTodo.filter((cur) => cur.id !== todoId));
    });
  };

  return (
    <Main>
      <h1>Todo Today</h1>
      <form onSubmit={onHandleSubmit}>
        <Input
          className="todo"
          color="primary"
          placeholder="오늘 할 일은?"
          value={todo}
          onChange={onChangeTodo}
        />
        <input className="submit-btn" type="submit" value="등록" />
      </form>
      <div
        style={{
          height: '100%',
          overflow: 'scroll',
        }}
      >
        {curTodo && (
          <List>
            {curTodo.map((t) => (
              <TodoItem
                key={t.id}
                style={{
                  maxWidth: '1000px',
                }}
              >
                <div
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  <Checkbox id={t.id} todo={curTodo} setTodo={setCurTodo} />
                  {/* <input type="checkbox" value={t.id} />
                  {t.content} */}
                </div>
                {/* todo
                    특정 일정에 대한 모달만 뜨도록 하는 법
                     */}
                <Edit />
                <Clear
                  style={{ color: 'black' }}
                  onClick={(e) => onClickDelete(t.id, e)}
                />
              </TodoItem>
            ))}
          </List>
        )}
      </div>
    </Main>
  );
};

// export async function getServerSidePorps() {
//   const res = await fetch('/api/test');
//   const data = await res.json();
//   const curTodo = data.message;
//   console.log(curTodo);

//   return { props: { curTodo } };
// }

export default TodoForm;
