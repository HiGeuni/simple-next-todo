import { useState } from 'react';
import Layout from '../components/Layout';
import DetailLayout from 'components/DetailLayout';
import { Button } from '@mui/material';
import TodoUpdateModal from 'components/TodoUpdateModal';

export default function Week() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <Layout>
      <DetailLayout>
        <h1>This is Home Page</h1>
        <Button
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          Open Modal
        </Button>
        {show && <TodoUpdateModal setShow={setShow} />}
      </DetailLayout>
    </Layout>
  );
}
