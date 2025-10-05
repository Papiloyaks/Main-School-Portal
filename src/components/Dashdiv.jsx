import React from 'react'


const Dashdiv = ({id,level,style,mat,img}) => {
  let inDiv = {
    borderBottom: '1px solid',
    padding: '2px',
    display: 'flex',
    justifyContent: 'space-between'
  }
  return (
    
    <>
    <div>
        <div className={style}>
            <div style={inDiv}>
                <div className='text-red-500'>{img}</div>
                {level}
            </div>
            <div className='flex justify-between font-bold'>
                <p>{id}</p>
                <p>{mat}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashdiv