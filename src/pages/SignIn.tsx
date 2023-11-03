import Or from '../components/auth/Or';
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
    </div>
  );
}

export default SignIn;
