import logo from '../../assets/logo/logo.svg';
function Navbar() {
  return (
    <div className='flex justify-between items-center'>
      <div className='text-[28px] text-[#4E5D78] font-[700] flex items-start gap-2'>
        <img src={logo} alt='Logo' />
        <h1>Stack</h1>
      </div>
      <div>
        <button className='flex items-center gap-[35px] bg-[#F0F5FA] py-[14px] ps-[18px] pr-[13px] rounded-[16px] '>
          <span className='text-[12px] font-[500] text-[#B0B7C3]'>
            English (UK)
          </span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='11'
            height='7'
            viewBox='0 0 11 7'
            fill='none'
          >
            <path
              d='M1 1L5.5 6L10 1'
              stroke='#B0B7C3'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
