import {Outlet} from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

function Layout() {
  return (
    <div className='max-w-[1440px] px-4 md:px-[81px] pt-[28px] mx-auto '>
      <Navbar />
      <main className='min-h-[80vh] flex flex-col justify-center'>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
