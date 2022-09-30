import React from 'react'

const SignUp = () => {
  return (
    <div className="ragister">
  <h1>Ragister</h1>
  <input className='inputBox' type="text" placeholder='Enter Name' />
  <input className='inputBox' type="email" placeholder='Enter Email' />
  <input className='inputBox' type="password" placeholder='Enter Password' />
  <button className='buttonReg' type="button"> Ragister</button>
    </div>
  )
}

export default SignUp
