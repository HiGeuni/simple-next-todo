import Layout from '../components/Layout';
import DetailLayout from 'components/DetailLayout';
import { CalendarComponent } from 'components/Calendar';
import { useState } from 'react';
import moment from 'moment';
import { ITodoType } from 'types/TodoTypes';
import { TodoDetail } from 'components/TodoDetail';
import { GetStaticProps } from 'next';

export default function Week({ todos }: any) {
  const [value, setValue] = useState(new Date());
  const [todo] = useState<ITodoType[]>(todos);

  return (
    <Layout>
      <CalendarComponent value={value} setValue={setValue} todos={todos} />
      <DetailLayout>
        <TodoDetail
          value={moment(value).format('YYYY-MM-DD')}
          todos={todo.filter(
            (d2: ITodoType) =>
              moment(d2.createdAt).format('YYYY-MM-DD') ===
              moment(value).format('YYYY-MM-DD'),
          )}
        />
      </DetailLayout>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/test');
  const todos = await res.json();
  console.log('SSR!');
  return {
    props: {
      todos: todos.message,
    },
  };
};
