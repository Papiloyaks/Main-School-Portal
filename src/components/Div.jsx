import React from 'react'

const Div = ({title,title2,title3,name,style}) => {

  let myFont = {
    fontFamily: 'Quicksand',
  }

  return (
    <div style={myFont} className={`${style} m-5 p-2`}>
        <h6 className='font-semibold'>{name}</h6>
        <p>{title}</p>
        <p>{title2}</p>
        <p>{title3}</p>
    </div>
  )
}

export default Div