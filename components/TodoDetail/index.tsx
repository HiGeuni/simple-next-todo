import { ITodoType } from 'types/TodoTypes';
import { DateWrapper, DetailList, TodoDetailWrqpper } from './style';

interface IProps {
  value: string;
  todos: ITodoType[];
}

export const TodoDetail = ({ value, todos }: IProps) => {
  return (
    <TodoDetailWrqpper>
      <DateWrapper>Todo at {value}</DateWrapper>
      {todos.length !== 0 ? (
        todos.map((todo) => (
          <DetailList key={todo.id}>{todo.content}</DetailList>
        ))
      ) : (
        <>There are No Todos</>
      )}
    </TodoDetailWrqpper>
  );
};
