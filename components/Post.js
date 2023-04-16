import React from 'react'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import {BiComment} from 'react-icons/bi'

const Post=({ id, username, userImg, img, caption, })=>
{
   


    return (
        
        <div className={`relative `}>
      <img src={img} alt="" className=" inset-0 w-full h-full object-cover" />
      {/* <BsFillBookmarkHeartFill className='h-6 w-20 absolute -top-2 -right-3 flex items-center  justify-center text-red-50'/> */}
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50  opacity-0 hover:opacity-100 text-white ">
        <div className='flex'>
        <h2 className="text-lg font-semibold m-0 flex-1 items-center">{caption}</h2>
        <BiComment className='h-5 w-5' />
        </div>
        <div className="flex items-center mt-1">
          <img src={userImg} alt="User image" className="w-8 h-8 rounded-full mr-2" />
          <span className="text-sm flex-1 font-semibold">{username}</span>
          <BsFillBookmarkHeartFill className='h-5 w-5'/>
        </div>
      
        
                
      </div>
     </div>
    )
}
      


      
export default Post