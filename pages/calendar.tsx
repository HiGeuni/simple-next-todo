import Layout from '../components/Layout';
import DetailLayout from 'components/DetailLayout';
import { CalendarComponent } from 'components/Calendar';

export default function Week() {
  return (
    <Layout>
      <CalendarComponent />
      <DetailLayout>
        <div>Hi</div>
      </DetailLayout>
    </Layout>
  );
}
