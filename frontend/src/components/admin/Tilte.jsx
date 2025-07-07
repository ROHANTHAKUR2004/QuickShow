import React from 'react'

const Tilte = ({text1, text2}) => {
  return (
     <h1 className='font-medium text-2xl'>
        {text1}
        <span
        className='underline ml-1 text-primary'
        >{text2}</span>
     </h1>
  )
}

export default Tilte
