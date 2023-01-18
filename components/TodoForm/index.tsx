import { Button, Icon, Input, List, ListItem } from '@mui/material';
import { Main, TodoItem } from './styles';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { ITodoType } from 'types/TodoTypes';
import { Remove } from '@mui/icons-material';
import Checkbox from '../CheckBox';

const TodoForm = () => {
  const [todo, setTodo] = useState<string>('');
  const [curTodo, setCurTodo] = useState<ITodoType[]>([]);

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

  useEffect(() => {
    loadCurTodoData();
  }, []);

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
                <Button onClick={(e) => onClickDelete(t.id, e)}>
                  <Icon
                    component={Remove}
                    style={{
                      color: 'skyblue',
                    }}
                  />
                </Button>
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
