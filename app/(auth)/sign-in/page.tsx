import Authform from '@/components/Authform'
import React from 'react'

function SignIn() {
  return (
    <search className='flex-centre size-full max-sm:px-6'>
       <Authform type="sign-in"/>
    </search>
  )
}

export default SignIn