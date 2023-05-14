import React from 'react'
import Logo from '../components/Logo'
import StepController from '../components/StepController'
export default function SignUp() {
  return (
    <div className='flex w-screen flex-wrap items-center text-start sm:no-wrap'>
        <Logo />
        <StepController />
    </div>
  )
}
