import {twMerge} from 'tailwind-merge';
function ErrorText({children, className}: IUIProps) {
  const twClass = twMerge('text-[14px] text-[#FF5630] font-[500]', className);
  return <h1 className={twClass}>{children}</h1>;
}

export default ErrorText;
