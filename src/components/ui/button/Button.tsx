import React from 'react';
import {twMerge} from 'tailwind-merge';
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variation: 'primary' | 'secondary';
  className?: string;
};
function Button({children, icon, variation, className, ...props}: ButtonProps) {
  let twClass =
    'text-[16px]  bg-[#377DFF] py-3 md:py-[19px] px-[16px] rounded-[16px] text-white w-[540px]';

  if (variation === 'primary') {
    twClass = twMerge(
      'text-[16px]  bg-[#377DFF] py-3 md:py-[19px] px-[16px] rounded-[16px] text-white',
      className
    );
  } else if (variation === 'secondary') {
    twClass = twMerge(
      'text-[16px]  bg-[#F0F5FA] py-3 md:py-[19px] px-[30px] rounded-[16px] text-[#8A94A6]',
      className
    );
  }

  return (
    <button
      {...props}
      className={twMerge(
        twClass,
        `${icon ? 'flex items-center gap-[11px]' : ''}`
      )}
    >
      {icon ? <span>{icon}</span> : null}
      <span> {children}</span>
    </button>
  );
}

export default Button;
