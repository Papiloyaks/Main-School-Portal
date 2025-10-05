import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


const PayHistory = () => {
  const navigate = useNavigate()
  const transaction = JSON.parse(localStorage.getItem('reference'))
  console.log(transaction);
  useEffect(() => {
    if(!localStorage.mystatus){
      navigate('/student/signin')
    }
  }, [])
  return (
    <>
      <div className='border w-[100px] content'>
          <table className=' w-full text-center'>
            <tr className='border'>
              <td className='border border-black font-bold'>Reference</td>
              <td className='border border-black font-bold'>Amount</td>
              <td className='border border-black font-bold'>Time</td>
              <td className='border border-black font-bold'>Date</td>
            </tr>
            <tr className='border border-black'>
              <td className='border-black border'>{transaction.number}</td>
              <td className='border-black border'>{transaction.amount}</td>
              <td className='border-black border'>{transaction.myTime}</td>
              <td className='border-black border'>{transaction.myDate}</td>
            </tr>
          </table>
      </div>
    </>
  )
}

export default PayHistory