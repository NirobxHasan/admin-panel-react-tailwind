import {useEffect, useState} from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import {MdOutlineKeyboardDoubleArrowLeft} from 'react-icons/md';
import {Puff} from 'react-loader-spinner';
import {useGetUsersList} from '../api/hooks/user/useGetUsersList';
import HeaderTitle from '../components/ui/typography/HeaderTitle';
import UserTable from '../components/user/UserTable';
function User() {
  const datax = {
    page: 2,
    per_page: 6,
    total: 12,
    total_pages: 2,
  };
  const pageNumbers = [];
  for (let i = 1; i <= datax.total_pages; i++) {
    pageNumbers.push(i);
  }

  const [currentPage, setCurrentPage] = useState<number>(1);
  // const [data, setData] = useState({});

  const {data, isLoading, refetch} = useGetUsersList(currentPage);
  console.log(isLoading);

  useEffect(() => {
    console.log(currentPage);
    refetch();
  }, [currentPage, refetch]);
  const handleNextPrevious = (
    direaction: 'start' | 'end' | 'next' | 'prev'
  ) => {
    direaction === 'start' && setCurrentPage(1);
    direaction === 'end' && setCurrentPage(data?.data.total_pages);
    direaction === 'prev' && currentPage > 1 && setCurrentPage(currentPage - 1);
    direaction === 'next' &&
      currentPage < data?.data.total_pages &&
      setCurrentPage(currentPage + 1);
  };
  return (
    <div>
      <div>
        <HeaderTitle>Users List</HeaderTitle>
      </div>
      {isLoading ? (
        <div className='w-full h-[60vh] flex justify-center items-center'>
          <Puff
            height='150'
            width='150'
            radius={1}
            color='#2F80ED'
            ariaLabel='puff-loading'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
          />
        </div>
      ) : (
        <UserTable users={data?.data.data} />
      )}

      <div className='flex items-center gap-[5px]'>
        <button
          onClick={() => handleNextPrevious('start')}
          className='border-[1px] rounded-[8px] w-[32px] h-[32px] flex justify-center items-center text-[#333333] hover:text-white hover:bg-[#2F80ED]'
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>
        <button
          onClick={() => handleNextPrevious('prev')}
          className='border-[1px] rounded-[8px] w-[32px] h-[32px] flex justify-center items-center text-[#333333] hover:text-white hover:bg-[#2F80ED]'
        >
          <IoIosArrowBack />
        </button>

        {Array.from({length: data?.data.total_pages}, (_, i) => i + 1).map(
          (page) => (
            <button
              key={page}
              className={`border-[1px] rounded-[8px] w-[32px] h-[32px] text-[12px] font-[600]  ${
                currentPage === page
                  ? 'bg-[#2F80ED] text-white'
                  : 'text-[#333333] '
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() => handleNextPrevious('next')}
          className='rotate-180 border-[1px] rounded-[8px] w-[32px] h-[32px] flex justify-center items-center text-[#333333] hover:text-white hover:bg-[#2F80ED]'
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => handleNextPrevious('end')}
          className='rotate-180 border-[1px] rounded-[8px] w-[32px] h-[32px] flex justify-center items-center text-[#333333] hover:text-white hover:bg-[#2F80ED]'
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>
      </div>
    </div>
  );
}

export default User;
