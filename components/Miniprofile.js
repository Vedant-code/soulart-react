import React from 'react'
import {signOut, useSession} from 'next-auth/react'



function Miniprofile() {
  const {data:session} = useSession();
  
  return (
    <div className='flex items-center justify-between mt-5 ml-10'>
        <img src={session?.user?.image}className="w-12 h-12 xl={w-16 h-16} rounded-lg border p-[2px]" alt="" />

        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>{session?.user?.usename}</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Solian Art</h3>
        </div>

        <button onClick={signOut} className=' text-emerald-400 font-semibold text-sm'>Log Out</button>
    </div>
  )
}

export default Miniprofile