import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Register = () => {
  return (
    <div><Navbar/>
    <div className='register template d-flex justify-content-center align-item-center 100-w 100-vh '>
        <div className='form-container  p-5 rounded '>
        <form action="">
            <h3>Register</h3>
            <div className='mb-2'>
                <label htmlFor="text" className='my-2'>First Name</label>
                <input type="text" placeholder='Enter First Name ' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor="text" className='my-2'>Last Name</label>
                <input type="text" placeholder='Enter Last Name ' className='form-control'/>
            </div>
          
            <div className='mb-2'>
                <label htmlFor="email" className='my-2'>Email</label>
                <input type="email" placeholder='Enter Email ' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor="password" className='my-2'>Password</label>
                <input type="password" placeholder='Enter Password ' className='form-control'/>
            </div>
           
            <div className='d-grid my-2'>
                <button className='btn btn-primary'>Sign up</button>
            </div>
            <p className='text-right my-2'>
                Already have an account ? <span className='mx-1'><Link to="/Login">Sign in</Link></span>
            </p>
        </form>
        </div>
    </div>
    </div>
  )
}

export default Register
