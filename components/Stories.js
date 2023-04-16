import React, { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker';
import Story from './Story';
import {useSession} from 'next-auth/react'

function Stories() {
    const [suggestions, setSuggestions] = useState([]);
    const {data:session} = useSession();
  useEffect(() => {
    const suggestions = [...Array(40)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    
    <div className='flex space-x-2 p-4 mt-4 bg-white border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thumb-black scrollbar-thin '>
      {session && (
        <Story img={session.user.image}
        username={session.user.username} />
      )}
        {suggestions.map(profile =>(
        <Story 
        key={profile.id}
        img={profile.avatar}
        username={profile.username} />
        ))}
        {/* Story */}
        {/* Story */}
        {/* Story */}
        {/* Story */}
        {/* Story */}
        {/* Story */}
        {/* Story */}
        {/* Story */}
        {/* Story */}

    </div>
  )
}

export default Stories