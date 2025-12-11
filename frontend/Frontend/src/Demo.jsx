import React, { useEffect, useState } from 'react'

const Demo = () => {

  const [seconds, setseconds] = useState(0);

  useEffect(() => {
    console.log("Timer mounted");

    const intervalId = setInterval(() => {
      setseconds(seconds + 1); 
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Timer unmounted");
    };
  }, []);

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default Demo
