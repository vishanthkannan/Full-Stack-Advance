// import React, { useEffect } from 'react'

// const Demo = () => {

//   const [post,setpost] = useState([])

//   useEffect(()=>{
//     async function fetchposts() {
//       try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts/3")
//         const data = await res.json();
//         setpost(data);

//       }catch(err){
//         console.log("Error while fetching",err)
//       }
//       fetchposts();
//     }
//   },[]);


//   return (
//     <div>
//       posts.map((post)=>(
//         <>
//       <h2>{Posts.id}</h2>
//       <p>{posts.title}</p>
//       <h2>{Posts.body}</h2>
//         </>
//       ))
//     </div>
//   )
// }

// export default Demo


import React, { useEffect, useState } from 'react'

const Demo = () => {

  const [post, setpost] = useState([])

  useEffect(() => {
    async function fetchposts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json();
        setpost(data.slice(0, 5));

      } catch (err) {
        console.log("Error while fetching", err)
      }
    }
    fetchposts();  
  }, []);          


  return (
    <div>
      {post.map((post) => (
        <>
          <h2 className='bg-purple-100'>Id: {post.id}</h2>   
          <p className='text-2xl bg-purple-200'>Title: {post.title}</p>  
          <h2 className='text-1xl bg-purple-400'>Body: {post.body}</h2> 
        </>
      ))}
    </div>
  )
}

export default Demo
