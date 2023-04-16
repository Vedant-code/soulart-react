import React from 'react'

function Story({img, username}) {
  return (
    <div className='cursor-pointer'>
      <img className='w-10 rounded-lg p-[1.5px] border-emerald-500 border-2 hover:scale-110 transition ease-out transform duration-200 ' src={img} alt="" />
      <p className='text-sm w-10 truncate ' >{username}</p>
    </div>
  )
}

export default Story