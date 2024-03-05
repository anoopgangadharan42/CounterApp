import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByamount, reset } from '../counterSlice'

function Counter() {
  const[amount,setamount] =useState(0)

  const dispatch= useDispatch()
 const count=  useSelector(state=>state. counterReducer.count)
 const handleincrementsByamount=()=>{
  if(amount){
    dispatch(incrementByamount(amount))
  }else{
    alert("enter a valid amount")
  }
 }
  return (
    <div className='border rounded p-5 text-center '>


      <h1 style={{ fontSize: '80px' }}>{count}</h1>
      <div style={{ width: '500px' }} className="d-flex justify-content-between mt-5">
        <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>DECREMENT</button>
        <button onClick={()=>dispatch(reset())}  className='btn btn-danger'>Reset</button>
        <button onClick={()=>dispatch(increment())}  className='btn btn-success'>INCREMENT</button>

      </div>

      <div className='d-flex justify-content-between mt-5'>
        <input onChange={e=>setamount(e.target.value)} type="text" className='form control bg-white' placeholder='Increment Amount' />
        <button onClick={handleincrementsByamount} className='btn btn-primary ms-4'>INCREMENT BY AMOUNT</button>

      </div>
    </div>

  )
}

export default Counter