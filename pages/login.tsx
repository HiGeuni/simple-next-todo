import Layout from 'components/Layout';
import type { NextPage } from 'next';
import { signIn, useSession, signOut } from 'next-auth/react';

const Login = () => {
  const { data, status } = useSession();
  return (
    <Layout>
      <main>
        <p>status: {status}</p>
        <p>{data?.user?.name}</p>
        {data?.user ? (
          <button type="button" onClick={() => signOut()}>
            Google Logout
          </button>
        ) : (
          <button type="button" onClick={() => signIn()}>
            Google Login
          </button>
        )}
      </main>
    </Layout>
  );
};

export default Login;
