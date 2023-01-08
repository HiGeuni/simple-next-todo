import { Input } from '@mui/material';
import { Main } from './styles';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { todoType } from 'types/TodoTypes';

export const TodoForm = () => {
  const [todo, setTodo] = useState<string>('');
  const [curTodo, setCurTodo] = useState<todoType[]>([]);

  // const loadCurTodoData = async () => {
  //   const result = await fetch('api/test');
  //   const data = await result.json();
  //   setCurTodo(data.message);
  //   console.log(data);
  // };

  const loadCurTodoData = () => {
    fetch('/api/test')
      .then((res) => res.json())
      .then((data) => setCurTodo(data.message));
  };

  const onChangeTodo = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }, []);

  const onHandleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = { val: todo };
    await fetch('/api/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    await loadCurTodoData();
    setTodo('');
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
      {curTodo && (
        <>
          {curTodo.map((t) => (
            <div
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '20px',
              }}
            >
              {t.content}
            </div>
          ))}
        </>
      )}
    </Main>
  );
};
