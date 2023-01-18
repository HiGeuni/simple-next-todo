import { useCallback, useEffect, useState } from 'react';
import { ActiveDiv, CheckBoxWraper } from './styles';
import { ITodoType } from 'types/TodoTypes';
import moment from 'moment';

interface IProps {
  id: number;
  todo: ITodoType[];
  setTodo: (e: ITodoType[]) => void;
}

const Content = (t: ITodoType) => {
  return (
    <div>
      <div>{t.content}</div>
      <div>{moment(t.createdAt).format('YYYY-MM-DD')}</div>
    </div>
  );
};

const Checkbox = ({ id, todo, setTodo }: IProps) => {
  const [data, setData] = useState(todo.find((x) => x.id === id)!);
  const [isCheck, setIsCheck] = useState<boolean>(data.isComplete);

  return (
    <CheckBoxWraper>
      <input
        className={isCheck ? 'checked' : 'no'}
        type="checkbox"
        defaultChecked={isCheck}
        onChange={() => {
          fetch('/api/test', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: id,
              content: data.content,
              isComplete: !isCheck,
            }),
          });
          setIsCheck(!isCheck);
        }}
        id="checkbox"
      />
      <label htmlFor="checkbox"></label>
      {isCheck ? (
        <ActiveDiv>
          <Content {...data} />
        </ActiveDiv>
      ) : (
        <Content {...data} />
      )}
    </CheckBoxWraper>
  );
};

export default Checkbox;
