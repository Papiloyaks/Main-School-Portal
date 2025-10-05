import React from 'react';
import photo from '../Images/photo.jpeg'
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';




const Studentsignin = () => {
    let navigate = useNavigate()

    // let mee =  `UNI2023${Math.round(Math.random()*10000)}`
    // console.log(mee);

    let myDiv = {
        // minWidth: '100vw',
        backgroundColor: '#e5e7eb'
    }
    let url = 'https://main-school-portal.onrender.com/student/signin'
    // let url = 'https://school-portal-back.vercel.app/student/signup'

    let formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values)=> {
            // console.log(values);
            axios.post(url,values)
            .then((response)=>{
                console.log(response);
                if(!response.data.status){
                    console.log(response.data.message);
                }else {
                    localStorage.token = response.data.token
                    navigate('/portal/dash')
                }
            })
            .catch((error)=>{
                console.log(error);
            })
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Field is empty').email('Enter an email address'),
            password: Yup.string().required('Field is empty'),
        })

    })
    // console.log(formik.touched);
  return (
    <>
    <div style={myDiv}>
        <section className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center items-center'>
            <div className='grid justify-center my-10'>
                <form action="" onSubmit={formik.handleSubmit} className='flex flex-col w-96 shadow-2xl p-6 rounded-2xl'>
                <h1 className='text-cyan-400'>SIGN IN</h1>
                    <input type="text" placeholder='name@mail.com' className={formik.touched.email && formik.errors.email ? 'border-2 p-2 caret-red-400 rounded border-red-500': 'border-2 p-2 caret-cyan-400 rounded border-cyan-800 my-2'} name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    <small className='text-red-500'>{formik.touched.email && formik.errors.email}</small>
                    <input type="text" placeholder='Password' className={formik.touched.password && formik.errors.password ? 'border-2 p-2 caret-red-400 rounded border-red-500': 'border-2 p-2 caret-cyan-400 rounded border-cyan-800 my-2'} name='password' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    <small className='text-red-500'>{formik.touched.password && formik.errors.password}</small>
                    <button type='submit' className='bg-cyan-900 p-2 rounded text-white'>Sign In</button>
                    <div className='flex justify-between my-2'>
                    <p className='font-semibold'>New Here?</p>
                    <Link to="/student/signup" className='text-cyan-600 underline'>Sign Up Here</Link>
                </div>
                </form>
            </div>
            <div>
                <img src={photo} className='w-full'  alt=""/>
            </div>
        </section>
    </div>
    </>
  )
}

export default Studentsignin