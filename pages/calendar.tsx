import Layout from '../components/Layout';
import DetailLayout from 'components/DetailLayout';
import { CalendarComponent } from 'components/Calendar';

export default function Week() {
  return (
    <Layout>
      <DetailLayout>
        <CalendarComponent />
      </DetailLayout>
    </Layout>
  );
}
