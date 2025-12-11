import React, { useState } from 'react'

const Greeting = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if((count-1)<0){
        setCount(0)
        alert("NO negative int,...");
        return;
    }
    setCount(count-1)
  };

    const refresh = () => {
    setCount(0);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
        
      <h2 className="text-3xl bg-amber-100">Likes: {count}</h2>

      <div className="flex gap-3">
        
        <button className="bg-green-700 px-4 py-2 text-white rounded-t-full"onClick={increase}>+</button>
        <button className="bg-orange-600 px-4 py-2 text-white rounded-b-full "onClick={decrease}>-</button>
        <button className="bg-amber-300 px-4 py-2 text-white rounded-l-full"onClick={refresh}>O</button>

      </div>
    </div>
  )
}

export default Greeting
