import ErrorText from '../typography/ErrorText';

function TextInput({onChange, error, icon, placeholder}: ITextInputProps) {
  return (
    <div>
      <div
        className={` w-full flex justify-between items-center gap-3 border-2  px-[18px] rounded-[16px] ${
          error ? 'border-red-500' : ''
        }`}
      >
        <div>{icon}</div>
        <input
          type='text'
          placeholder={placeholder}
          className='py-[18px] w-full focus:outline-none '
          onChange={onChange}
        />
      </div>
      {error && <ErrorText className='mt-[16px]'>{error}</ErrorText>}
    </div>
  );
}

export default TextInput;
