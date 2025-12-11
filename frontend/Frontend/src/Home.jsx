import React from 'react'

const Home = () => {

    const users = [
        {id:1,name:"Rohan"},
        {id:2,name:"Vishanth"},
        {id:3,name:"Guna"}
    ];

  return (
    <ul>
        {/* <li>{users[0].name}</li>
        <li>{users[1].name}</li>
        <li>{users[3].name}</li> */}
        {users.map((user)=>(
            <li className='text-green-500 'key={user.id}>{user.name}</li>

        ))}
        
        </ul>
  )
}

export default Home
