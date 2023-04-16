import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import Miniprofile from './Miniprofile'
import Suggestion from './Suggestion'
import {useSession} from 'next-auth/react'

function Feed() {
  const {data:session} = useSession();
  return (
    
    <main className={`grid grid-cols-1 sm:grid-cols-2 p-2  lg:grid-cols-3 sm:max-w-3xl md:max-w-6xl mx-auto ${!session && "!grid-cols-1 max-w-4xl "} `}>
        
        <section className='col-span-2 '>
        
        <Stories/>
        <Posts />
        </section>
        {session && (
        <section className='hidden lg:inline-grid lg:col-span-1'>
        <div className='fixed'>
        <Miniprofile/>
        <Suggestion/>
        </div>
                
        </section>
        )}

    </main>
        
        
    
  )
}

export default Feed