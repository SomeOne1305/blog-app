// import React from 'react'
import { Link } from 'react-router-dom'
import { icon48 } from '../../assets'
import { Input } from '../common'


const Login = () => {
  return (
    <div className="w-full py-9">
      <form action="" className="max-w-md pt-3 mt-3 mx-auto text-center w-full">
        <div className="flex justify-center items-center flex-col">
          <img src={icon48} width="100" height="100" alt=""/>
          <h2 className="text-2xl text-blue-700 tracking-wide">BravoBlog</h2>
        </div>
        <div className="w-full p-2 m-1 mt-4">
          <Input id='email' type='email' background='white' label='Email'/>
          <div className="py-3"></div>
          <Input id='password' type="password" label='Password' background="white"/>
          <div className="text-left py-4">
            <a href="#" className="text-sm text-blue-500 hover:underline"
              >Forgot password ?</a
            >
          </div>
          <button
            type="submit"
            className="w-full text-center mt-3 bg-blue-500 hover:bg-blue-600 transition duration-50 p-1 text-white rounded-md text-xl"
          >
            Login
          </button>
          <div className="py-3 mt-3">
            <div className="w-full h-[2px] my-3 bg-blue-500 relative">
              <span
                className="absolute uppercase -bottom-2 left-[31%] px-1 bg-white text-black-800 text-md"
                >or register now</span
              >
            </div>
          </div>
          <Link
            to="/register"
            className="my-3 py-1 text-center text-md block border border-blue-500 text-blue-500 font-semibold rounded-md"
            >Register</Link
          >
        </div>
      </form>
    </div>
  )
}

export default Login