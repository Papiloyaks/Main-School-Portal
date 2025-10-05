import React, { useEffect, useState } from 'react'
import '../Side.css'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import Dashdiv from '../components/Dashdiv'
import axios from 'axios'
import {FaUserGraduate} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import {BiLineChart} from 'react-icons/bi'
import {FaBookOpen} from 'react-icons/fa'
import {SiLevelsdotfyi} from 'react-icons/si'
import {IoIosPaper} from 'react-icons/io'
import {MdEmojiPeople} from 'react-icons/md'
import {BsPencilFill} from 'react-icons/bs'





const Main = () => {
  const hideSideBar = () => {
    document.querySelector('.sidebar').style.display = 'block';
    document.querySelector('.sidebar').style.width = '100%';
    document.querySelector('.content').style.display = 'none';
}
const [matricno, setmatricno] = useState("")
const [first, setfirst] = useState("")
const [last, setlast] = useState("")

let endpoint = 'https://main-school-portal.onrender.com/student/portal'
let token = localStorage.token
let navigate = useNavigate()

useEffect(() => {
 axios.get(endpoint,{
    headers: {
       "Authorization": `Bearer ${token}`,
       "Content-type": 'application/json',
       "Accept": 'application/json'
    }
 })
 .then((response)=>{
  console.log(response.data);
  if(!response.data.status){
    navigate('/student/signin')
  } else {
    localStorage.setItem('mystatus',JSON.stringify(response.data.status))
    setmatricno(response.data.response.matric);
    setfirst(response.data.response.firstname);
    setlast(response.data.response.lastname)
    localStorage.setItem('myprofile',JSON.stringify(response.data))
  }
  
 })
 .catch((error)=>{
  console.log(error);
 })
}, [])

  return (
    <>
        
        <main className="content border border-cyan-500 bg-slate-200 p-0">
          <h1 className='text-xl font-bold'>Welcome {first} {last}</h1>
          <section>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-6 my-3 gap-1'>
            <Dashdiv id='Matric No:' style='shadow p-2 font-semibold' mat={matricno} img={<FaUserGraduate/>}/>
            <Dashdiv id='Semester'  style='shadow p-2' mat='Harmattan' img={<FaGraduationCap/>}/>
            <Dashdiv id='Current CGPA'  style='shadow  p-2'mat='nil' img={<BiLineChart/>}/>
            <Dashdiv id='Department'  style='shadow p-2'mat='nil' img={<FaBookOpen/>}/>
            <Dashdiv id='Current Level' style='shadow p-2' mat='nil'  img={<SiLevelsdotfyi/>}/>
            <Dashdiv id='Attendance' style='shadow p-2' img={<IoIosPaper/>}/>
            <Dashdiv id='Student Leave' mat="none" style='shadow p-2' img={<MdEmojiPeople/>}/>
            <Dashdiv id='dolores accusamus ' style='shadow p-2' img={<BsPencilFill/>}/>
            </div>
          </section>
          <section className='mx-5 py-2'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3  rounded'>
              <div className=' shadow p-2 border'> me Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta autem laboriosam modi libero, fugiat voluptates accusantium eum a cumque laborum sint architecto ipsa animi soluta atque vero adipisci dolorem id eos, excepturi rerum expedita similique possimus ea! Aliquid beatae, architecto dolores quis nostrum quisquam corporis eius ducimus repudiandae officiis debitis!</div>
              <div className=' shadow p-2 border'>
                Lorem ipsum dolor, sit amet consectetur adiisicing elit. Quaerat possimus vitae, iusto consectetur atque id accusamus. Tenetur aliquid unde possimus.
              </div>
            </div>
          </section>
          <section className='m-5 shadow'>
            <div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum velit, sunt eius facilis minus quae quia tenetur magni incidunt distinctio quis? Qui harum facilis incidunt adipisci voluptates quae ipsam? Voluptate reprehenderit delectus harum eius architecto quaerat optio ab nisi iste tempora enim nobis, a cum necessitatibus? Possimus vero asperiores iure, quam quaerat mollitia ut exercitationem tempore! Veritatis optio suscipit praesentium officiis fugit consectetur, culpa voluptas ea repellendus. Ex maiores ipsa alias tempore quidem. Aspernatur error unde obcaecati nisi consequuntur iusto labore quibusdam dicta maiores iure. Ex obcaecati accusamus perferendis ab mollitia labore repudiandae. Pariatur voluptate cumque eveniet dicta omnis obcaecati!
              </div>
            </div>
          </section>
        </main>
    </>
  )
}

export default Main