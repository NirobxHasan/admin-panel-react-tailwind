import UserRow from './UserRow';
function UserTable() {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 '>
      <div className='mt-4'>
        <table className='min-w-full '>
          <thead className='bg-[#FAFBFC]  h-[44px]'>
            <tr className='rounded-full'>
              <th className='px-8 py-3 text-left text-[12px] font-[600] text-[#4E5D78] uppercase tracking-wider rounded-tl-[12px] rounded-bl-[12px]'>
                #ID
              </th>
              <th className='px-6 py-3 text-left text-[12px] font-[600] text-[#4E5D78] uppercase tracking-wider'>
                USER
              </th>
              <th className='px-6 py-3 text-left text-[12px] font-[600] text-[#4E5D78] uppercase tracking-wider'>
                EMAIL
              </th>
              <th className='px-3 py-3 text-left text-[12px] font-[600] text-[#4E5D78] uppercase tracking-wider rounded-tr-[12px] rounded-br-[12px]'>
                OPTIONS
              </th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            <UserRow
              id='1'
              img='https://via.placeholder.com/50'
              name='asef awef'
              email='ashdfs'
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;
const data = [
  {
    id: 1,
    image: 'https://via.placeholder.com/50',
    email: 'johndoe@example.com',
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/50',
    email: 'johndoe@example.com',
  },

  // Add more data as needed
];