import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div>
      <div className='bg-gray-600 p-4 text-white text-center'>User : {userid}</div>
    </div>
  )
}

export default User
