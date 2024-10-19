import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex justify-between items-center p-5 bg-blue-200'>
      <Link to={'/'} className='font-bold'>logo</Link>
      <ul className='flex justify-between items-center gap-4'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/create'}>Create</Link></li>
        <li><Link to={'/update'}>Update</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
