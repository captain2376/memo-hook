import React, { useMemo, useState } from 'react'

export const Counter1 = () => {
    const[counterOne,setCounterOne]=useState(0)
    const[counterTwo,setCounterTwo]=useState(0)
    const incrementOne=()=>{
        setCounterOne(counterOne+1)
    }
    const incrementTwo=()=>{
        setCounterTwo(counterTwo+1)
    }
    const isEven=useMemo(()=>{
        let i=0
        while (i<80000) {
            i++
        }
        return counterOne%2===0
    },[counterOne])
    return (
        
        <div>
            <hr/>
           <div> <button onClick={incrementOne} >Count One :{counterOne} </button>
           <span>{isEven?' is Even':' is Odd'}</span>
           </div>
            <button onClick={incrementTwo}>Count Two :{counterTwo} </button>
            <hr/>
        </div>
    )
}
