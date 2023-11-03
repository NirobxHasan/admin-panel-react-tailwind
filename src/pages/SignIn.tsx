import Or from '../components/auth/Or';
import SignInForm from '../components/auth/SignInForm';
import SocialAuth from '../components/auth/SocialAuth';
import HeaderTitle from '../components/ui/typography/HeaderTitle';
import SubTitle from '../components/ui/typography/Subtitlee';

function SignIn() {
  return (
    <div className='max-w-[540px] mx-auto'>
      <HeaderTitle className='text-center'>Sign In</HeaderTitle>
      <SubTitle className='text-center mt-[19px]'>
        Welcome back, you’ve been missed!
      </SubTitle>
      <SocialAuth />
      <Or />
      <div>
        <SignInForm />
      </div>
      <div>
        <SubTitle className='text-[16px] mt-[35px] text-center font-[500]'>
          Already have an account?{' '}
          <span className='text-[#377DFF]'> Sign In</span>
        </SubTitle>
      </div>
    </div>
  );
}

export default SignIn;
