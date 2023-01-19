import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Layout from '../components/Layout';
import TodoForm from '../components/TodoForm';
import DetailLayout from 'components/DetailLayout';
import { ITodoType } from 'types/TodoTypes';

export default function Home({
  todos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <DetailLayout>
        <TodoForm todos={todos} />
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
