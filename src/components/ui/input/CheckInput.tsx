import {ChangeEventHandler} from 'react';

interface iCheckInputProps {
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error?: boolean;
}
function CheckInput({onChange, label, error}: iCheckInputProps) {
  return (
    <div className='flex'>
      <input
        type='checkbox'
        className=' border-gray-200 rounded text-[#377DFF]  focus:text-[#377DFF]  dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
        id='checkbox'
        onChange={onChange}
      />
      <label
        htmlFor='checkbox'
        className={`text-[16px] ml-3 ${
          error ? 'text-red-500' : 'text-[#B0B7C3] '
        } `}
      >
        {label}
      </label>
    </div>
  );
}

export default CheckInput;
