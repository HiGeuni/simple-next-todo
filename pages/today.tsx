import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Input } from '@mui/material';
import Layout from '../components/Layouts';
import { TodoForm } from '../components/TodoForm';

export default function Home() {
  return (
    <Layout>
      <TodoForm />
    </Layout>
  );
}
