import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament, reset } from '../Redux/counterSlice'

function Counter() {
  const [range,setRange] = useState('')
  console.log(range);
  // useSelector hook is used to access value from store
  // useDispatch hook is used to access functions inide action
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value)
  console.log("==range==",range);

  return (
    <div>
      <div className='d-flex align-items-center justify-content-center w-100 flex-column'>
        <h1 style={{ fontSize: '80px', color: 'black', fontFamily: 'sans-serif' }}>{count}</h1>
        <div className='my-3'>
          <button className='btn btn-danger' onClick={() => dispatch(decreament(Number(range)))}>Decrement &nbsp;<i class="fa-solid fa-circle-minus"></i></button>
          <button className='btn btn-success ms-2 ' onClick={() => dispatch(increament(Number(range)))}>Increament &nbsp;<i class="fa-solid fa-circle-plus"></i></button>
          <button className='btn btn-primary ms-2' onClick={() => dispatch(reset())} style={{ width: '110px' }}>Reset <i class="fa-solid fa-arrows-rotate"></i></button>
        </div>
      </div>
      <div className='mt-3 w-100'>
        <input type="text" className='form-control' placeholder='Enter the range' onChange={(e)=>setRange(e.target.value)} />
      </div>
    </div>
  )
}

export default Counter