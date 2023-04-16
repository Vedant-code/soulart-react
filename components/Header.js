import React from 'react';
import Image from "next/image";
import logo from "../Images/logo.png"
import devi from "../Images/devi.png"
import { RiSearchLine, RiMenu5Fill, RiMessage3Fill } from "react-icons/ri"
import { HiPlusSm } from "react-icons/hi"
import { HiHome } from "react-icons/hi2"
import { IoTelescope } from "react-icons/io5"
import { MdPeopleAlt } from "react-icons/md"
import { useSession, signOut, signIn } from "next-auth/react"
import { useRouter } from 'next/router';
import {useRecoilState} from 'recoil';
import {modalState} from '../atoms/modalAtoms'



function Header() {

  const { data: session } = useSession();
  const [open , setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className='shadow-lg border-b bg-gray-900 sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5  '>


        <div onClick={()=>router.push("/")} className='relative hidden md:inline-grid w-24 p-7 cursor-pointer'>
          <Image
            src={devi}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div onClick={()=>router.push("/")}  className='relative w-10 md:hidden flex-shrink-0 cursor-pointer'>
          <Image
            src={logo}
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className='max-w-xs'>
          <div className='relative p-2 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none '>
              <RiSearchLine className="h-5 w-5 text-gray-500" />
            </div>
            <input className='bg-gray-800 block w-full pl-10 sm:text-sm border-gray-500 rounded-full  focus:ring-green-400 focus:border-gray-800 text-gray-200' type="text" placeholder="Search" />
          </div>
        </div>



        {/* <Right></Right> */}
        <div className='flex items-center space-x-6 '>



          {session ? (
            <>
              <>
                <button onClick={()=>setOpen(true)} className='submit text-mg font-bold'>
                  <HiPlusSm  className='h-6 w-6' /> Submit
                </button>
                <button>
                  <HiPlusSm onClick={()=>setOpen(true)} className='mainicons' />
                </button>
              </>
              <HiHome onClick={()=>router.push("/")}  className=' navBtn' />
              <div className='relative navBtn'>
                <RiMessage3Fill className='navBtn ' />
                <div className='absolute -top-1 -left-1 text-xs w-4 h-4 pinktopurple rounded-full flex items-center justify-center text-red-50 animate-pulse '>3</div>
              </div>

              <MdPeopleAlt className='navBtn ' />
              <IoTelescope className='navBtn ' />

              <Image
                onClick={signOut}
                width={10}
                height={10}
                src={session.user.image} alt="Profile pic" className='h-10 w-10 rounded-lg cursor-pointer hidden sm:inline-flex hover:scale-110 transition ease-out transform duration-200 drop-shadow-md shadow-white ' />
            </>
          ) : (
            <>
              <>
                <HiHome onClick={()=>router.push("/")}  className=' navBtn' />
                <button onClick={()=>setOpen(true)} className='submit text-sm font-bold'>
                  <HiPlusSm  className='h-6 w-6 ' /> Submit
                </button>
                <button>
                  <HiPlusSm onClick={()=>setOpen(true)} className='mainicons' />
                </button>
              </>

              <button className='submit text-sm font-bold' onClick={signIn} >Signin</button>
            </>
          )}

          <RiMenu5Fill className='h-7 w-7 sm:hidden text-white cursor-pointer hover:text-green-400 ' />



        </div>
      </div>
    </div>
  )
}

export default Header