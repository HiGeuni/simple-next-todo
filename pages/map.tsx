import DetailLayout from 'components/DetailLayout';
import Layout from 'components/Layout';
import MapComponent from 'components/Map';

export default function mapPage() {
  return (
    <Layout>
      <DetailLayout>
        <h1>This is Map</h1>
        <MapComponent />
      </DetailLayout>
    </Layout>
  );
}
