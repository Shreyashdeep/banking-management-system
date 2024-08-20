import Authform from '@/components/Authform'
import { getLoggedInUser } from '@/lib/actions/user.actions';

const SignUp=async() =>{
  const loggedInUser= await getLoggedInUser();
  console.log(loggedInUser)
  return (
    <search className='flex-centre size-full max-sm:px-6'>
       <Authform type="sign-up"/>
    </search>
  )
}

export default SignUp