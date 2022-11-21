import React, {useState, useEffect} from 'react';
import axios from 'axios'

function Morty(props) {
    const [posts, setPosts] = useState([])


    useEffect(() => {
    axios.get ('https://rickandmortyapi.com/api/character/?page=2')
    .then(res => {
        console.log(res.data)
        setPosts
        (res.data.results)
    })
    .catch(err => {
        console.log(err)
    })
    },[])

  return (
      
    <div>
         <ul>
             {posts.map(post => (
                 <li key={post.id}>
                     {post.title}
                 </li>
             ))}
         </ul>
    </div>
 );

}
 export default Morty;
