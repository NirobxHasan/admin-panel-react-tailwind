import {twMerge} from 'tailwind-merge';
import {IUIProps} from '../../../types';
function HeaderTitle({children, className}: IUIProps) {
  const twClass = twMerge('text-[26px] text-[#323B4B] font-bold', className);
  return <h1 className={twClass}>{children}</h1>;
}

export default HeaderTitle;
