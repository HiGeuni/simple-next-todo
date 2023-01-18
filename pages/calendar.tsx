import Layout from '../components/Layout';
import DetailLayout from 'components/DetailLayout';
import { CalendarComponent } from 'components/Calendar';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { ITodoType } from 'types/TodoTypes';
import { TodoDetail } from 'components/TodoDetail';

export default function Week() {
  const [value, setValue] = useState(new Date());
  const [todos, setTodos] = useState<ITodoType[]>([]);

  const loadCurTodoData = async () => {
    await fetch('/api/test')
      .then((res) => res.json())
      .then((data) => {
        // const d = data.message.filter(
        //   (d2: ITodo) =>
        //     moment(d2.createdAt).format('YYYY-MM-DD') ===
        //     moment(value).format('YYYY-MM-DD'),
        // );
        setTodos(data.message);
      });
  };

  useEffect(() => {
    loadCurTodoData();
  }, [value]);

  return (
    <Layout>
      <CalendarComponent value={value} setValue={setValue} todos={todos} />
      <DetailLayout>
        <TodoDetail
          value={moment(value).format('YYYY-MM-DD')}
          todos={todos.filter(
            (d2: ITodoType) =>
              moment(d2.createdAt).format('YYYY-MM-DD') ===
              moment(value).format('YYYY-MM-DD'),
          )}
        />
      </DetailLayout>
    </Layout>
  );
}
