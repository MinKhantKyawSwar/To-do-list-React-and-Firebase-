import React from 'react'
import Refreshicon from '../svgs/Refreshicon'

const Navbar = ({getNotes, totalNotes}) => {

  return (
    <section className='navbar'>
        <h1 className="logo">Fire Note</h1>
        <div className='nav-right'>
          <p className='total-notes'>
            <span>{totalNotes}</span> Notes</p>
          {/* <button className="nav-btn" onClick={getNotes}>Refresh</button> */}
          <div className="nav-btn" onClick={getNotes}>
            <Refreshicon/>
          </div>
        </div>
    </section>
  )
}

export default Navbar