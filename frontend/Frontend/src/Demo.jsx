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
  // ❗ only fix: convert to array for map
      } catch (err) {
        console.log("Error while fetching", err)
      }
    }
    fetchposts();  // ❗ moved OUTSIDE the function (your main mistake)
  }, []);          // ❗ you already wrote this, keeping same


  return (
    <div>
      {post.map((post) => (    // ❗ put inside {}
        <>
          <h2 className='bg-amber-300'>{post.id}</h2>    {/* ❗ corrected Posts → post */}
          <p className='text-2xl bg-blue-300'>{post.title}</p>  {/* ❗ corrected posts → post */}
          <h2 className='text-1xl bg-blue-400'>{post.body}</h2> {/* ❗ corrected Posts → post */}
        </>
      ))}
    </div>
  )
}

export default Demo
