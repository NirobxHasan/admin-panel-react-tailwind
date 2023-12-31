import {ForwardedRef, forwardRef, useState} from 'react';
import {BsFillEyeFill, BsFillEyeSlashFill} from 'react-icons/bs';
import {IInputProps} from '../../../types';
import ErrorText from '../typography/ErrorText';

const PasswordInput = forwardRef(
  ({error, ...rest}: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
      <div>
        <div
          className={` w-full flex justify-between items-center gap-3 border-2  px-[18px] rounded-[16px] ${
            error ? 'border-red-500' : ''
          }`}
        >
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.61905 14.0108V15.9326C9.61905 16.1335 9.79576 16.2963 10 16.2963C10.2104 16.2963 10.381 16.1275 10.381 15.9326V14.0108C10.8248 13.8583 11.1429 13.4467 11.1429 12.963C11.1429 12.3493 10.6312 11.8519 10 11.8519C9.36882 11.8519 8.85714 12.3493 8.85714 12.963C8.85714 13.4467 9.17517 13.8583 9.61905 14.0108ZM4.28571 8.14816V5.55499C4.28571 2.48645 6.84409 0 10 0C13.1495 0 15.7143 2.48705 15.7143 5.55499V8.14816C16.9784 8.15167 18 9.14838 18 10.3774V14.0741C18 17.3402 15.2714 20 11.9054 20H8.09456C4.73232 20 2 17.3469 2 14.0741V10.3774C2 9.14043 3.02273 8.15164 4.28571 8.14816ZM6.57143 8.14815V5.55619C6.57143 3.71055 8.10645 2.22222 10 2.22222C11.8897 2.22222 13.4286 3.71489 13.4286 5.55619V8.14815H6.57143Z'
                fill='#C1C7D0'
              />
            </svg>
          </div>
          <input
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            {...rest}
            className='py-[18px] w-full focus:outline-none '
          />
          <button onClick={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <div className='text-[#B0B7C3]'>
                <BsFillEyeSlashFill size={20} />
              </div>
            ) : (
              <div className='text-[#B0B7C3]'>
                <BsFillEyeFill size={20} />
              </div>
            )}
          </button>
        </div>
        {error && <ErrorText className='mt-[16px]'>{error}</ErrorText>}
      </div>
    );
  }
);

export default PasswordInput;
