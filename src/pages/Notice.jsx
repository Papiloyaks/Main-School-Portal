import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Notice = () => {

  const navigate = useNavigate()
  useEffect(() => {
    if(!localStorage.mystatus){
      navigate('/student/signin')
    }
  }, [])

  return (
    <div>Notice</div>
  )
}

export default Notice