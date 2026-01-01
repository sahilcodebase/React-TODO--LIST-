import React, { useState } from 'react';
import { Trash2 } from 'lucide-react'




const Input = () => {

  const [state, setstate] = useState('')

  
  const [mainTask, setmainTask] = useState([])


  const btnClick = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { state }])

    setstate('')


  }

  

  return (
    <>

      <form onSubmit={btnClick}>


        <div className='flex gap-3 mt-3'>

          <input
            value={state}
            onChange={(e) => {
              setstate(e.target.value)
            }}

            type="text" placeholder='Enter Your Todo'
            className='lg:py-4 py-2 lg:px-5 text-xl flex-1  px-3  bg-amber-50 rounded-2xl outline-none   ' />


          <button className=' bg-blue-600
  hover:bg-indigo-700  text-white lg:px-3 py-3 lg:w-30   font-semibold rounded-xl  '>
            submit
          </button>
        </div>



      </form>
      <div id='overflow-ul' className='mt-3 h-80 relative   overflow-auto' >
        <ul className='uppercase    flex flex-col justify-between gap-3 '>

          {mainTask.map((elem, idx) => {

            return <li key={idx} className='  rounded-xl py-3 px-4  shadow-sm flex justify-between   bg-white text-gray-800'>{elem.state}
              <button onClick={() => {
                 setmainTask(mainTask.filter((_, idx) => idx !== 0))
              
              }} className=' text-red-500 rounded font-bold hover:text-red-700 ' ><Trash2 /></button>

            </li>


          })}



        </ul>
      </div>



    </>
  )
}

export default Input
