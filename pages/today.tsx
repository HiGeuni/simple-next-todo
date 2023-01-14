import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Input } from '@mui/material';
import Layout from '../components/Layout';
import TodoForm from '../components/TodoForm';
import DetailLayout from 'components/DetailLayout';

export default function Home() {
  return (
    <Layout>
      <DetailLayout>
        <TodoForm />
      </DetailLayout>
    </Layout>
  );
}
