import {InputHTMLAttributes} from 'react';

interface IUIProps {
  children: React.ReactNode;
  className?: string;
}

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined;
}

interface ITextInputProps extends IInputProps {
  placeholder: string;
  icon: React.ReactNode;
}

// type ITextInputProps = IPasswordInputProps & {
//   icon: React.ReactNode;
// };
