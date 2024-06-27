import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-4 border-teal-400 bg-slate-600 '>
        <div className=''>
            <div className=' flex gap-10 '>
                <div className='self-center self-justify'>
                <Link to="/" className='whitespace-nowrap text font-bold text-sm ' >        
      <span className='px-1  bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-600 rounded-lg text-white'>Uni</span>
      <span className='text-white font-boald'>Blog</span>
      </Link>
                </div>
                <div className='w-full sm:flex sm:items-center sm:justify-between flex p-2  '>
                    <Footer.Copyright href='#'
                    by='UniBlog'
                    year={new Date().getFullYear()}
                    className='flex gap-2 text-slate-400'/>

                </div>
            </div>

        </div>

    </Footer>
  )
}
