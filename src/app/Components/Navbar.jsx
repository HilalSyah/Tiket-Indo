import React from 'react'


export const Navbar = () => {
  return (
    <div className="navbar">
      <nav className='flex items-center justify-between p-7 text-2xl'>
        <div className="logo flex items-center justify-center ms-5">
          <h2 className=' font-jockey text-4xl'>Tiket<span className='text-red-600'>Indonesia</span></h2>
        </div>
        <ul className='flex me-10'>
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/Contact">Contact</a></li>
          <li className="nav-item"><a href="/Login">Masuk</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar