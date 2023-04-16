import React from 'react'
import Post from './Post'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { useState, useEffect } from 'react'



function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubscribe =  onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot=>{
            setPosts(snapshot.docs);
        });
        return unsubscribe;

    },  [db]);
    
    return (
    <div className="mt-2">
        
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 2, 650:3, 900: 3}}
            >
                <Masonry gutter="5px">
                {posts.map((post)=>(
                    <Post key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption} />
                ))}
                </Masonry>
            </ResponsiveMasonry>

        
    </div>
    
    )
}

// const styles = {
//     pin_container: {
// margin: 0,
//     padding: 0,
//     width: 80vw,
//     display: grid,
//     gridTemplateColumns: repeat(auto-fill, 250px),
//     gridAutoRows: 10px,
//     position: absolute,
//     left: 50%,
//     transform: translateX(-50%),
//     justifyContent: center,
//     backgroundColor: black;
//     }
//    }



export default Posts