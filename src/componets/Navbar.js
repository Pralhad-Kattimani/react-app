import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode} navbar-${props.redmode} bg-${props.redmode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link> 
    {/*  <a className="navbar-brand" href="/">{props.title}</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">

       <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        
          {/*  <a className="nav-link active" aria-current="page" href="/">Home</a> */}

        </li>
       < li className="nav-item">

       <Link className="nav-link active" aria-current="page" to="/Counter">useState</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">about us</Link>
        </li>
      </ul>
      <div className='d-flex'>
        <div className='bg-primary rounded mx-2' onClick={()=>{props.toggelemode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer' }}></div>
        <div className='bg-danger rounded mx-2' onClick={()=>{props.toggelemode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer' }}></div>
        <div className='bg-success rounded mx-2' onClick={()=>{props.toggelemode('success')}} style={{height:'30px',width:'30px',cursor:'pointer' }}></div>
        <div className='bg-warning rounded mx-2' onClick={()=>{props.toggelemode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer' }}></div>

      </div>
      <form className="d-flex" role="search">
      { /* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={()=>{props.toggelemode('null')}}type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">enable dark mode</label>
</div>
 {/* red mode code 
    <div className={`form-check from-switch mx-4 text-${props.redmode==='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.switchmode} type='checkbox' role="switch" id="switchCheckDefaul"/>
      <label className="form-check-label" htmlFor="switchCheckDefault">enable  red mode</label>
          </div>*/
 }
      </form>
    </div>
  </div>
</nav>
  )
}

Navbar.PropTypesr = {
    title : PropTypes.string.isrequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps ={
    title:'set title here',
    aboutText:'about text here'
}