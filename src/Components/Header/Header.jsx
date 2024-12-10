import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';

import Menu from '../../Menu_json_api/Menu.json';
import Company from '../../Company_detail/Company.json';

import './Header.css';
// function Mainmenu(para) {
//   return (
//     <>
//      <Link to={para.item.link} className='nav-link'>{para.item.label}</Link>
//     </>
//   )
// }
function Mainmenu({ para }) {
  return (
    <>
      {/* short cot if else :-(para.isButton? 'btn btn-primary':'nav-link')  */}
      <Link to={para.link} className={para.isButton? 'btn btn-primary':'nav-link'}>{para.label}</Link>
    </>
  )
}
function Submenu({ para }) {
  // console.log(para);
  return (
    <>
      <NavDropdown title={para.label} >
        {
          para.dropdownMenu.map((data, index) => {
            return <Mainmenu para={data} key={index} />
          })

        }
      </NavDropdown>
    </>
  )
}



function Header() {
  return (
    <header>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container >
          <Link to="/" className='navbar-brand'>
            <Image src={Company.logo} width="45px" /> {Company.name}
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              {/*            
             <Link className='nav-link' to="/">Home</Link>
             <Link className='nav-link' to="/about">About</Link>
             <Link className='nav-link' to="/contact">Contact</Link>
             <Link className='nav-link' to="/blog">Blog</Link>
             <Link className='nav-link' to="/reference">Reference</Link> */}

              {/* use link so compalsury use BrowserRouter,Routes,Route from react-router-dom */}
              {
                Menu.map((item, index) => {
                  if (item.isDropDown === true) {
                    return <Submenu para={item} key={index} />
                  }
                  return <Mainmenu para={item} key={index} />
                })
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;