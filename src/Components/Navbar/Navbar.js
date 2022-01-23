import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'

function Navbars() {
  return (
    <>
    <nav className="navbar navbar-light justify-content-around" >
      <a className="navbar-brand head"><span>My </span>Hair Diary</a>
          <button className="btn btn-outline-success my-2 my-sm-0">Calendar</button>
    </nav>
    <div style={{display:'flex',justifyContent:'space-around'}}>
          <div className='day'>S</div>
          <div className='day'>M</div>
          <div className='day'>T</div>
          <div className='day'>W</div>
          <div className='day'>T</div>
          <div className='day'>F</div>
          <div className='day'>S</div>
        </div>
    </>
  );
}

export default Navbars;
