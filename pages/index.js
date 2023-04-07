import Topbar from '@/components/topbar';
import Sidebar from '../components/sidebar';

const MyPage = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <main>{/* Your page content goes here */}</main>
    </div>
  );
};

export default MyPage;
