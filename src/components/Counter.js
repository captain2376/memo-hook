import React, { useMemo, useState } from 'react'



 const Counter = () => {
    const [countOne,setincrementOne]=useState(0)
const [countTwo,setincrementTwo]=useState(0)
    const incrementOne=()=>{
        setincrementOne(countOne+1)
    }
    const incrementTwo=()=>{
        setincrementTwo(countTwo+2)
    }
    const isEven=useMemo(()=>{
        let i=0
        while(i<20000)i++
        return countOne%2===0
    },[countOne])
    return (
        <div>
            <button onClick={incrementOne}>Count one={countOne}</button>
            <span>{isEven?'Even':'Odd'} </span>
            <button onClick={incrementTwo}>Count Two={countTwo}</button>
        </div>
    )
}
export default Counter;