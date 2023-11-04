import {ForwardedRef, forwardRef} from 'react';
import {ITextInputProps} from '../../../types';
import ErrorText from '../typography/ErrorText';

const TextInput = forwardRef(
  (
    {error, icon, placeholder, ...rest}: ITextInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <div
          className={`w-full flex justify-between items-center gap-3 border-2  px-[18px] rounded-[16px] ${
            error ? 'border-red-500' : ''
          }`}
        >
          <div>{icon}</div>
          <input
            ref={ref}
            placeholder={placeholder}
            autoComplete='false'
            className='py-[18px] w-full focus:outline-none  autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] '
            {...rest}
          />
        </div>
        {error && <ErrorText className='mt-[16px]'>{error}</ErrorText>}
      </div>
    );
  }
);

export default TextInput;
