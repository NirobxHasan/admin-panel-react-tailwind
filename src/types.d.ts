interface IUIProps {
  children: React.ReactNode;
  className?: string;
}

interface IInputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

interface ITextInputProps extends IInputProps {
  placeholder: string;
  icon: React.ReactNode;
}

// type ITextInputProps = IPasswordInputProps & {
//   icon: React.ReactNode;
// };
