import HeaderTitle from '../components/ui/typography/HeaderTitle';
import UserTable from '../components/user/UserTable';
function User() {
  const data = {
    page: 2,
    per_page: 6,
    total: 12,
    total_pages: 2,
  };
  const pageNumbers = [];
  for (let i = 1; i <= data.total_pages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div>
        <HeaderTitle>Users List</HeaderTitle>
      </div>
      <UserTable />
      <div className='flex items-center justify-center my-4'>
        <nav
          className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
          aria-label='Pagination'
        >
          <a
            href='#'
            className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            {/* Left Arrow */}
            <span className='sr-only'>Previous</span>
            <svg
              className='h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M7.707 5.293a1 1 0 010 1.414L4.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </a>
          {pageNumbers.map((number) => (
            <a
              key={number}
              href='#'
              className='relative inline-flex items-center px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'
            >
              {number}
            </a>
          ))}
          <a
            href='#'
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            {/* Right Arrow */}
            <span className='sr-only'>Next</span>
            <svg
              className='h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M12.293 14.707a1 1 0 010-1.414L15.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default User;
// Example data
