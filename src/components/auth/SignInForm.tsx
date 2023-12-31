import {SubmitHandler, useForm} from 'react-hook-form';
import {LineWave} from 'react-loader-spinner';
import {useDispatch, useSelector} from 'react-redux';
import {signinAPICall} from '../../stores/slice/auth';
import {RootState} from '../../stores/store';
import Button from '../ui/button/Button';
import CheckInput from '../ui/input/CheckInput';
import PasswordInput from '../ui/input/PasswordInput';
import TextInput from '../ui/input/TextInput';
import ErrorText from '../ui/typography/ErrorText';
type Inputs = {
  email: string;
  password: string;
};
function SignInForm() {
  const dispatch = useDispatch<any>();
  const {loading, error} = useSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(signinAPICall(data));
  };

  return (
    <form className='space-y-[16px]' onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        placeholder='Your Email'
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
        error={errors.email && errors.email.message}
        icon={<EmailIcon />}
      />
      <PasswordInput
        {...register('password', {required: true})}
        error={errors.password && 'Password is required'}
      />
      <CheckInput
        label={'Remember Me'}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          console.log(e.target.checked)
        }
      />
      {error && <ErrorText>{error}</ErrorText>}
      {loading ? (
        <div className='w-full flex justify-center'>
          <LineWave
            height={'100%'}
            width={'100'}
            color='#4fa94d'
            ariaLabel='line-wave'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
          />
        </div>
      ) : (
        <Button variation='primary' className='w-full'>
          Sign In
        </Button>
      )}
    </form>
  );
}

export default SignInForm;

const EmailIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M10.9999 20.1658C9.71578 20.1671 8.44547 19.9008 7.26999 19.3839C5.91221 18.7803 4.7215 17.8557 3.80043 16.6897C2.87935 15.5238 2.25552 14.1514 1.98266 12.6908C1.70981 11.2302 1.7961 9.72518 2.23412 8.30529C2.67215 6.88543 3.44876 5.59334 4.49707 4.5403C5.34664 3.67944 6.3593 2.99659 7.47584 2.53164C8.5924 2.0667 9.7904 1.82901 10.9999 1.83247C11.2896 1.83247 11.5839 1.84622 11.8735 1.87372C14.1635 2.13239 16.2772 3.22845 17.808 4.95118C19.3389 6.67391 20.1789 8.90172 20.1666 11.2063V11.8242C20.1666 12.7194 19.8127 13.5783 19.1819 14.2137C18.5513 14.8491 17.6949 15.2092 16.7997 15.2158C16.741 15.2158 16.6814 15.2158 16.6228 15.2113C16.1037 15.181 15.5989 15.0297 15.1488 14.7694C14.6986 14.5092 14.3156 14.1472 14.0304 13.7125C13.4795 14.4876 12.7054 15.0763 11.8113 15.4001C10.9172 15.7239 9.9455 15.7673 9.02608 15.5245C8.10665 15.2817 7.28311 14.7643 6.66537 14.0413C6.04763 13.3183 5.66505 12.4242 5.56869 11.4781C5.47233 10.532 5.66677 9.57916 6.12606 8.74645C6.58536 7.91377 7.28766 7.24096 8.13927 6.81779C8.99087 6.39462 9.95127 6.24122 10.8923 6.37806C11.8334 6.51489 12.7103 6.93546 13.4062 7.58363C13.4311 7.36378 13.5359 7.16074 13.7006 7.01304C13.8653 6.86536 14.0787 6.78331 14.2999 6.78246C14.543 6.78246 14.7761 6.87905 14.9481 7.05096C15.12 7.22286 15.2166 7.45602 15.2166 7.69913V11.6628C15.2005 12.0845 15.345 12.4965 15.6209 12.8157C15.897 13.1349 16.2839 13.3375 16.7034 13.3825H16.7722C16.9771 13.3829 17.1799 13.3428 17.3693 13.2646C17.5587 13.1865 17.7308 13.0718 17.8759 12.927C18.0209 12.7823 18.1358 12.6104 18.2144 12.4211C18.2929 12.2319 18.3333 12.029 18.3333 11.8242V11.2054C18.3488 9.35696 17.6805 7.56798 16.457 6.18234C15.2335 4.79671 13.5409 3.91219 11.7049 3.6988C11.472 3.67771 11.2355 3.6658 10.9999 3.6658C9.97272 3.66543 8.9569 3.88087 8.01829 4.29813C7.07967 4.71541 6.23918 5.32521 5.55127 6.08804C4.86337 6.85088 4.3434 7.74971 4.02504 8.72632C3.70669 9.70291 3.59705 10.7355 3.70324 11.7573C3.8401 13.0531 4.31936 14.2891 5.09181 15.3384C5.86427 16.3878 6.90209 17.2126 8.09872 17.7283C9.29531 18.244 10.6076 18.4319 11.9009 18.2727C13.1942 18.1136 14.4218 17.6131 15.4577 16.8228C15.5532 16.7495 15.6623 16.6959 15.7786 16.6648C15.8949 16.6338 16.0162 16.6259 16.1356 16.6418C16.2549 16.6577 16.37 16.6968 16.4741 16.7571C16.5783 16.8174 16.6696 16.8976 16.7429 16.9933C16.816 17.0888 16.8696 17.1979 16.9007 17.3142C16.9318 17.4305 16.9396 17.5518 16.9237 17.6711C16.9079 17.7905 16.8687 17.9055 16.8084 18.0097C16.7482 18.1139 16.6679 18.2052 16.5724 18.2784C14.9709 19.4994 13.0137 20.1624 10.9999 20.1658ZM10.2501 8.16572C9.68966 8.16554 9.14173 8.33156 8.67566 8.64279C8.20959 8.95402 7.84628 9.39647 7.63168 9.9142C7.41708 10.4319 7.36085 11.0016 7.47007 11.5514C7.5793 12.101 7.84908 12.606 8.2453 13.0024C8.64152 13.3987 9.14639 13.6687 9.69607 13.778C10.2457 13.8874 10.8154 13.8314 11.3332 13.617C11.8511 13.4026 12.2936 13.0394 12.605 12.5734C12.9164 12.1074 13.0826 11.5595 13.0826 10.9992C13.0816 10.2481 12.7829 9.5281 12.2519 8.997C11.721 8.46587 11.001 8.16693 10.2501 8.16572Z'
        fill='#C5CBD3'
      />
    </svg>
  );
};
