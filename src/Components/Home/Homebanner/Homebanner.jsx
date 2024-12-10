import React from 'react';
import Button from 'react-bootstrap/Button';
import './Homebanner.css';


function Homebanner() {
  return (
    <>
      <div className='Homebanner'>
        <video className='position-relative'loop autoPlay muted width="100%"height="550px">
          <source src='2.mp4' />
       </video>

        <div className='Homebannercontent '>
          <img src="logo192.png" id="logorotate" width={120} />
          <h1>React in CNC </h1>
          <h2 className='mb-4'>The library for web and native user interfaces</h2>
          <Button id="btn1">Learn React</Button> &nbsp; &nbsp;
          <Button id="btn2">API Reference</Button>
        </div>
      </div>
    </>
  )
}


export default Homebanner