import React from 'react'
import { useSelector } from 'react-redux';
import languageObj from '../../utils/languageObject'

const LoginFooter = () => {
    const duplicate=languageObj
    const languageValue = useSelector((store) => store.languageChange.language);
  return (
    <div className='w-full text-[#a8a6a6] bg-black opacity-70 pt-10 footer-container '>
    <div className='mx-[20%] mb-20 text-sm w-90 footer-sub-container'>
    <h1 className='text-start mb-5 text-sm' ><span>{duplicate[languageValue]?.questions}</span>{' '}
                    <span>{duplicate[languageValue]?.call}</span>{' '}
                    <span>+99999999999</span>{' '} </h1>
    <div className='flex w-100% pb-10  gap-24 footer '>
        <div className='flex flex-col gap-2 footer-sub-div1' >
        <p>{duplicate[languageValue]?.faq}</p>
                        <p>{duplicate[languageValue]?.cookiePreferences}</p>
        </div>
        <div className='flex flex-col gap-2  footer-sub-div2' >
        <p>{duplicate[languageValue]?.helpcenter}</p>
                        <p>{duplicate[languageValue]?.coporateInformation}</p>
        </div>
        <div className='flex gap-12 footer-child  footer-sub-div3'>
        <p>{duplicate[languageValue]?.termsOfUse}</p>
                        <p>{duplicate[languageValue]?.privacy}</p>
        </div> 
    </div>
    </div>
    
</div>
  )
}

export default LoginFooter