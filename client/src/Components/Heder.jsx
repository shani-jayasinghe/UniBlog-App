import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'


export default function Heder() {
  const path = useLocation().pathname;
  return (
    <div className="bg-slate-950 w-full h-screen">
    
    <Navbar fixed="top" className='border-b-2 bg-slate-600 ' >
      <Link to="/" className='self-center whitespace-nowrap text sm:text-3xl font-boald ' >        
      <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Uni</span>
      <span className='text-white font-boald'>Blog</span>
      </Link>
       
      <form className='flex items-center '>
      <FaSearch className='text-slate-700 bg-slate-400 w-5 h-6'/>
        <input type='text' placeholder='Search...' 
        className=' w-20 h-6 bg-slate-400 sm:w-40'/>          
      </form>        
        
      <div className="flex gap-60 md:order-2"> 
      
        <ul className='flex gap-10 self-center'>
           <Link to='/'> <li className='hidden sm:inline text-slate-300 hover:underline hover:text-white text sm:text-xl'>Home</li> </Link>
            <Link to='/About'> <li className='hidden sm:inline text-slate-300 hover:underline hover:text-white text sm:text-xl'>About</li></Link>
            <Link to='/Projects'><li className='hidden sm:inline text-slate-300 hover:underline hover:text-white text sm:text-xl'>Projects</li></Link>
          </ul>          

          <Link to='/SignIn'>
            <Button className='px-1 h-8 bg-gradient-to-r from-blue-700 via-black-300 to-teal-400 rounded-lg text-black'> 
              Sign In 
            </Button>
          </Link>        
      </div>              
     </Navbar>
    </div>
  )
}
