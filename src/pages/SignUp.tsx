import {Link} from 'react-router-dom';
import Or from '../components/auth/Or';
import SignUpForm from '../components/auth/SignUpForm';
import SocialAuth from '../components/auth/SocialAuth';
import HeaderTitle from '../components/ui/typography/HeaderTitle';
import SubTitle from '../components/ui/typography/Subtitlee';
function SignUp() {
  return (
    <div className='max-w-[540px] mx-auto'>
      <HeaderTitle className='text-center'>Getting Started</HeaderTitle>
      <SubTitle className='text-center mt-[19px]'>
        Create an account to continue!
      </SubTitle>
      <SocialAuth />
      <Or />
      <div>
        <SignUpForm />
      </div>
      <div>
        <SubTitle className='text-[16px] mt-[35px] text-center font-[500]'>
          Already have an account?{' '}
          <Link to={'/signin'} className='text-[#377DFF]'>
            Sign In
          </Link>
        </SubTitle>
      </div>
    </div>
  );
}

export default SignUp;
