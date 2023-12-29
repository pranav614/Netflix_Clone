import React from 'react'

const LoginFooter = () => {
  return (
    <div className='w-full text-[#5D5D5D] bg-black opacity-70 pt-10 footer-container '>
    <div className='mx-[20%] mb-20 text-sm w-90 footer-sub-container'>
    <h1 className='text-start mb-5 text-sm' ><span>Questions?</span>  <span>Call</span> <span>+99999999999</span> </h1>
    <div className='flex w-100% pb-10  gap-24 footer '>
        <div className='flex flex-col gap-2' >
            <p>FAQ</p>
            <p>Cookie Preferences</p>
        </div>
        <div className='flex flex-col gap-2 ' >
            <p>Help Centre</p>
            <p>Corporate Information</p>
        </div>
        <div className='flex gap-12 footer-child '>
            <p>Terms of Use</p>    
            <p>Privacy</p>
        </div> 
    </div>
    </div>
    
</div>
  )
}

export default LoginFooter