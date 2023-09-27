import React from 'react'

const Wrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='wrapper'>
      {children}
    </div>
  )
}
export default Wrapper