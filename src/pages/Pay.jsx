import React, { useEffect, useState } from 'react'
import nav from '../Images/nav.png'
import PaystackPop from '@paystack/inline-js'
import { Navigate, useNavigate } from 'react-router-dom';





const Pay = () => {
  
  const navigate = useNavigate()
  useEffect(() => {
    if(!localStorage.mystatus){
      navigate('/student/signin')
    }
  }, [])

  const hideSideBar = () => {
    console.log(sidebar);
    
    document.querySelector('.sidebar').style.width = '100%';
    document.querySelector('.content').style.display = 'none';
  }

  let date = new Date()
  const [email, setemail] = useState('')
  const [amount, setamount] = useState('')
  const [name, setname] = useState('')
  // const [phone, setphone] = useState('')
 

  
  
  const payWithPaystack = (e) => {
    let answer = []
    if(localStorage.reference) {
    answer = JSON.parse(localStorage.getItem("reference"))
  }
    e.preventDefault()
    const paystack = new PaystackPop()
      paystack.newTransaction({
        key: 'pk_test_f625ae093e8d765eca5eb1d74e74de3476c5bc66',
        amount: 5000000,
        email,
        name,
        onSuccess(transaction){
          let message =   `payment complete! Reference ${transaction.reference}`
          alert(message)
          setname('')
          setemail('')
          const number = transaction.reference
          answer = {
            email,
            name,
            number,
            amount: 50000,
            myDate: date.toLocaleDateString(),
            myTime: date.toLocaleTimeString()
         }
          localStorage.setItem('reference',JSON.stringify(answer))
        },
        onCancel(){
          alert('transaction canceled')
        }
      })
    }

  return (
    <>
            <main className="content grid border border-cyan-500 bg-slate-200 p-0">
            <h1 className='font-bold'>PAY</h1>
            <div className='shadow rounded-xl lg:w-1/2 md:w-1/2 sm:w-2/3   mb-72 mx-auto p-2'>
              <form action="" id='paymentForm'>
            <div className='my-2'>
                  <label htmlFor="firstname">Name:</label>
                  <input type="text" className='text-cyan border-cyan-800 border-2 w-full rounded border' onChange={(e)=>setname(e.target.value)} value={name}/>
                </div>
                {/* <div className='my-2'>
                  <label htmlFor="phone">Phone:</label>
                  <input type="text"  className=' text-cyan border-cyan-800 border-2 w-full rounded border' onChange={(e)=>setphone(e.target.value)} value={phone}/>
                </div> */}
                <div className='my-2'>
                  <label htmlFor="email">Email:</label>
                  <input type="text"  className=' text-cyan border-cyan-800 border-2 w-full rounded border' onChange={(e)=>setemail(e.target.value)} value={email}/>
                </div>
                <div className='my-2'>
                  <label htmlFor="amount">Amount:</label>
                  <input type="text"  className=' text-cyan border-cyan-800 border-2 w-full rounded border' disabled placeholder='50,000' onChange={(e)=>setamount(e.target.value)} value={amount}/>
                </div>
                
                <button className='bg-cyan-800 w-full rounded text-white my-2 py-2' onClick={payWithPaystack}>Pay</button>
                </form>
            </div>
        </main>
    </>
  )
}

export default Pay