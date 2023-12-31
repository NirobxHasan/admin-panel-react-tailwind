import Button from '../ui/button/Button';

function SocialAuth() {
  return (
    <div className='mt-[30px] flex justify-center md:justify-between items-center flex-wrap gap-3 md:gap-2'>
      <Button
        variation='secondary'
        className='w-full md:w-[255px]'
        icon={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
          >
            <path
              d='M22.7141 10.4599H21.875V10.4167H12.5V14.5833H18.387C17.5282 17.0089 15.2204 18.75 12.5 18.75C9.04848 18.75 6.25004 15.9516 6.25004 12.5C6.25004 9.04843 9.04848 6.25 12.5 6.25C14.0933 6.25 15.5428 6.85104 16.6464 7.83281L19.5928 4.88645C17.7323 3.1526 15.2438 2.08333 12.5 2.08333C6.74744 2.08333 2.08337 6.74739 2.08337 12.5C2.08337 18.2526 6.74744 22.9167 12.5 22.9167C18.2526 22.9167 22.9167 18.2526 22.9167 12.5C22.9167 11.8016 22.8448 11.1198 22.7141 10.4599Z'
              fill='#FFC107'
            />
            <path
              d='M3.28442 7.65156L6.70682 10.1615C7.63286 7.86874 9.87557 6.24999 12.5 6.24999C14.0933 6.24999 15.5428 6.85104 16.6464 7.83281L19.5928 4.88645C17.7323 3.1526 15.2438 2.08333 12.5 2.08333C8.49901 2.08333 5.02922 4.34218 3.28442 7.65156Z'
              fill='#FF3D00'
            />
            <path
              d='M12.5 22.9167C15.1906 22.9167 17.6354 21.887 19.4839 20.2125L16.2599 17.4844C15.2141 18.2766 13.9141 18.75 12.5 18.75C9.79062 18.75 7.4901 17.0224 6.62344 14.6115L3.22656 17.2287C4.95052 20.6021 8.45156 22.9167 12.5 22.9167Z'
              fill='#4CAF50'
            />
            <path
              d='M22.7141 10.4599H21.875V10.4167H12.5V14.5833H18.387C17.9745 15.7484 17.225 16.7531 16.2583 17.4849L16.2599 17.4839L19.4839 20.212C19.2557 20.4193 22.9167 17.7083 22.9167 12.5C22.9167 11.8016 22.8448 11.1198 22.7141 10.4599Z'
              fill='#1976D2'
            />
          </svg>
        }
      >
        Sign In with Google
      </Button>
      <Button
        variation='secondary'
        className='w-full md:w-[255px] '
        icon={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='24'
            viewBox='0 0 20 24'
            fill='none'
          >
            <g clipPath='url(#clip0_16_98)'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.256 3.89624C14.0196 2.88584 14.5985 1.45774 14.3891 0C13.141 0.088904 11.6822 0.907396 10.831 1.97424C10.055 2.9409 9.41729 4.37889 9.66636 5.77454C11.0308 5.81828 12.439 4.98002 13.256 3.89624ZM20 17.6086C19.454 18.8561 19.1912 19.4135 18.4878 20.5185C17.5066 22.0609 16.123 23.9815 14.4069 23.9956C12.8837 24.0125 12.491 22.9725 10.4231 22.9852C8.35532 22.9965 7.92424 24.0153 6.39835 23.9998C4.6836 23.9843 3.37257 22.2514 2.39135 20.709C-0.353892 16.3992 -0.642649 11.3402 1.0502 8.64908C2.25449 6.73835 4.15399 5.6207 5.93853 5.6207C7.75455 5.6207 8.89726 6.64804 10.4013 6.64804C11.8601 6.64804 12.7483 5.61789 14.8489 5.61789C16.4391 5.61789 18.1238 6.51115 19.3226 8.05215C15.3922 10.2733 16.0286 16.0606 20 17.6086Z'
                fill='#C1C7D0'
              />
            </g>
            <defs>
              <clipPath id='clip0_16_98'>
                <rect width='20' height='24' fill='white' />
              </clipPath>
            </defs>
          </svg>
        }
      >
        Sign In with Apple ID
      </Button>
    </div>
  );
}

export default SocialAuth;
