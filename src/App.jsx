
import React from 'react'
import Logo from './components/Logo'
import Input from './components/Input'

const App = (props) => {
  return (
    <>
      <div className={`bg-linear-to-r from-purple-300 to-blue-200 lg:h-screen h-full text-white  flex justify-center items-center`}>

        <div className={`bg-linear-to-r from-purple-400 to-pink-400 text-black lg:h-120 h-1/2 lg:w-33/100 w-full p-4 rounded-xl`}>
          <Logo />
            <Input />
         
        </div>
      </div>
    </>
  )
}

export default App