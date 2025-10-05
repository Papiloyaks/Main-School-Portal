import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'





const Profile = () => {
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [matric, setmatric] = useState("")
  const [image, setimage] = useState('')
  const [newImage, setnewImage] = useState('')

  let navigate = useNavigate()

  // let endpoint = 'http://localhost:4223/student/image'
  let endpoint = 'https://main-school-portal.onrender.com/student/image/'
  let storedImage = JSON.parse(localStorage.getItem('myimage'))
  useEffect(() => {
    if(!localStorage.mystatus){
      navigate('/student/signin')
    }else {
      setnewImage(storedImage)
   let myProfile = JSON.parse(localStorage.getItem('myprofile'))
   console.log(myProfile.response.firstname);
   setfirstname(myProfile.response.firstname)
   setlastname(myProfile.response.lastname)
   setemail(myProfile.response.email)
   setmatric(myProfile.response.matric)
    }
  }, [])

  const changeFile = (e) => {
      let myImage = e.target.files[0]
      let reader = new FileReader
      reader.readAsDataURL(myImage)
      reader.onload = () => {
        setimage(reader.result);
      }
  }
  const uploadFile = () => {
    axios.post(endpoint,{image})
    .then((response)=>{
        localStorage.setItem('myimage',JSON.stringify(response.data.firstImage))
        setnewImage(response.data.firstImage)
      
  })
    .catch((error)=>{
      console.log(error);
    })
  }
  
  return (
    <>
      <main className="content grid border border-cyan-500 bg-slate-200 p-10">
          <div className='flex justify-between'>
            <h1 className='font-bold'>PROFILES</h1>
            <div className='h-full'>
             <img src={newImage} width={70} className='h-full rounded-full' alt="" />
            </div>
          </div>
            <div>
              {/* <input type="hidden" /> */} <p></p>
              <div className='flex justify-between w-1/2'>
              <input type="file" className='border border-2 border-black' onChange={(e)=>changeFile(e)}/>
              <button className='bg-black text-white px-1 rounded' onClick={uploadFile}>upload</button>
            </div>
            </div>
            <div className='border p-0 m-0 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-40 gap-10'>
                <div>
                  <p className='font-bold text-cyan-800'>Firstname:</p>
                  <p className='my-5 border border-cyan-800 border-2 py-2 text-center font-semibold'>{firstname}</p>
                </div>
                <div>
                  <p className='font-bold text-cyan-800'>Lastname:</p>
                  <p className='my-5 border border-cyan-800 border-2 py-2 text-center font-semibold'>{lastname}</p>
                </div>
                <div>
                  <p className='font-bold text-cyan-800'>Email:</p>
                  <p className='my-5 border border-cyan-800 border-2 py-2 text-center font-semibold'>{email}</p>
                </div>
                <div>
                  <p className='font-bold text-cyan-800'>Matric no:</p>
                  <p className='my-5 border border-cyan-800 border-2 py-2 text-center font-semibold'>{matric}</p>
                </div>
            </div>
        </main>
        
    </>
  )
}



export default Profile