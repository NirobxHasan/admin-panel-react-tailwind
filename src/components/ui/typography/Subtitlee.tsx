import {twMerge} from 'tailwind-merge';
function SubTitle({children, className}: IUIProps) {
  const twClass = twMerge('text-[18px] text-[#8A94A6] font-medium', className);
  return <h1 className={twClass}>{children}</h1>;
}

export default SubTitle;
