import React from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup'
import {Link, Navigate, json, useNavigate} from 'react-router-dom'
import axios from 'axios'




const StudentSignUp = () => {
    const navigate = useNavigate()
    let endpoint1 = 'https://main-school-portal.onrender.com/student/signup/'
    let formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            phone: '',
            dob: '',
            matric: `UNI2023${Math.round(Math.random()*10000)}`
        },
        onSubmit: (values)=>{
            // console.log(values);
            axios.post(endpoint1,values)
            .then((result)=>{
                // console.log(result);
                if (result){
                    let resultData = (result.data)
                    localStorage.setItem('myResult',JSON.stringify(resultData))
                    navigate('/congrat')
                }
            })
            .catch((errors)=>{
                console.log(errors);
            })
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('Field is empty'),
            lastname: Yup.string().required('Field is empty'),
            email: Yup.string().required('Field is empty').email('Enter an email address'),
            password: Yup.string().required('Field is empty'),
            phone:  Yup.number().typeError('Please enter a valid number').required('Field is empty'),
            dob: Yup.date().required('date of birth is required')
        })
    })
  return (
    <>
        <div className='m-0 bg-cyan-800'>
            <section className='border shadow-2xl py-10'>
                <div className='grid justify-center items-center'>
                <h1 className='font-bold text-3xl'>SIGN UP</h1>
                    <form action="" onSubmit={formik.handleSubmit} className='border-2 border-cyan-500 rounded-xl grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 w-96 p-2 my-2 shadow-2xl'>
                        <label htmlFor="Firstname" className='font-bold'>Firstname:</label>
                        <input  type="text" className={formik.touched.firstname && formik.errors.firstname ? 'border-2 p-2 caret-red-400 rounded-xl border-red-500': 'border-2 p-2 caret-cyan-400 rounded-xl border-cyan-800'}  name='firstname' placeholder='Input firstname' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        <small className="text-red-500 font-semibold">{formik.touched.firstname && formik.errors.firstname}</small>
                        <label htmlFor="lastname" className='font-bold'>Lastname:</label>
                        <input type="text"  className={formik.touched.lastname && formik.errors.lastname ? 'border-2 p-2 caret-red-400 rounded-xl border-red-500': 'border-2 p-2 caret-cyan-400 rounded-xl border-cyan-800'}  name='lastname'  placeholder='Input lastname' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        <small className="text-red-500 font-semibold">{formik.touched.lastname && formik.errors.lastname}</small>
                        <label htmlFor="email" className='font-bold'>Email:</label>
                        <input type="text"  className={formik.touched.email && formik.errors.email ? 'border-2 p-2 caret-red-400 rounded-xl border-red-500': 'border-2 p-2 caret-cyan-400 rounded-xl border-cyan-800'}  name='email'  placeholder='name@mail.com' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        <small className="text-red-500 font-semibold">{formik.touched.email && formik.errors.email}</small>
                        <label htmlFor="phone" className='font-bold'>Phone:</label>
                        <input type="text"  className={formik.touched.phone && formik.errors.phone ? 'border-2 p-2 caret-red-400 rounded-xl border-red-500': 'border-2 p-2 caret-cyan-400 rounded-xl border-cyan-800'}  name='phone'  placeholder='080123XXXXX:' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        <small className="text-red-500 font-semibold">{formik.touched.phone && formik.errors.phone}</small>
                        <label htmlFor="Firstname" className='font-bold'>Date of Birth:</label>
                        <input type="date"  className={formik.touched.dob && formik.errors.dob ? 'border-2 p-2 caret-red-400 rounded-xl border-red-500': 'border-2 p-2 caret-cyan-400 rounded-xl border-cyan-800'}  name='dob' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        <small className="text-red-500 font-semibold">{formik.touched.dob && formik.errors.dob}</small>
                        <label htmlFor="password" className='font-bold'>Password:</label>
                        <input type="text"  className={formik.touched.password && formik.errors.password ? 'border-2 p-2 caret-red-400 rounded-xl border-red-500': 'border-2 p-2 caret-cyan-400 rounded-xl border-cyan-800'}  name='password'  placeholder='1234' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        <small className="text-red-500 font-semibold">{formik.touched.password && formik.errors.password}</small>
                        <button type='submit' className='bg-black my-2 p-2 text-white font-bold rounded-xl'>Sign Up</button>
                        <div className='flex justify-between'>
                            <p className='font-semibold'>Have an Account?</p>
                            <Link className='underline text-cyan-600 font-semibold' to="/student/signin">Sign In Here</Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    </>
  )
}

export default StudentSignUp 