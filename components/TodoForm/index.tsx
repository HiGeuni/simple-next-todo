import { Button, Icon, Input, List, ListItem } from '@mui/material';
import { Main, TodoItem } from './styles';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { todoType } from 'types/TodoTypes';
import { Remove } from '@mui/icons-material';

export const TodoForm = () => {
  const [todo, setTodo] = useState<string>('');
  const [curTodo, setCurTodo] = useState<todoType[]>([]);

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

  const onHandleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    fetch('/api/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ val: todo }),
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        loadCurTodoData();
      });
    setTodo('');
  };

  const onClickDelete = (todoId: number, e: React.SyntheticEvent) => {
    e.preventDefault();
    fetch('/api/test', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: todoId,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        loadCurTodoData();
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
      {curTodo && (
        <List>
          {curTodo.map((t) => (
            <TodoItem>
              <div
                key={t.id}
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                {t.content}
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
    </Main>
  );
};
