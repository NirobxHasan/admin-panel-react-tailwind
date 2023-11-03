import Navbar from '../components/layout/Navbar';
interface ILayout {
  children: JSX.Element;
}
function Layout({children}: ILayout) {
  return (
    <div className='max-w-[1440px] px-4 md:px-[81px] pt-[28px] mx-auto '>
      <Navbar />
      <main className='min-h-[80vh] flex flex-col justify-center'>
        {children}
      </main>
    </div>
  );
}

export default Layout;
