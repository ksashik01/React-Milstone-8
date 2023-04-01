
import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {

 const [steps,setSteps]=useState(0);





const increseSteps = ()=>{

const newSteps= steps+1;
setSteps(newSteps)


}


useEffect(()=>{


console.log (steps)

},[steps])




    return (
        <div style={{border:'2px solid red', margin:'10px'}}>
            <h2>This is my Smart Watch</h2>
            <p>Steps:{steps}</p>
            <button onClick={increseSteps}> DeDour--------</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;




//  একটা increseSteps Arrow ফাঙ্কশন নিলাম যখন buttone click করবো তখন ওই Arrow ফাঙ্কশন কাজ করবে 