import React from 'react'

const Card = ({children, margin, width, padding}) => {
  return (
    <div className='p-6 bg-white border border-gray-200 rounded-lg shadow-md bg-gray-800 border-gray-700' style={{margin: margin, width: width, padding: padding}}>
        {children}
    </div>
  )
}

export default Card