import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer>
      <Container fluid className='px-0'>
        <Row className='d-flex flex-end row-cols-lg-5 row-cols-md-3 row-cols-2'>
          <Col className='col-12'>
            <div>
              <Link to="/" >
                <h5 className='fw-semibold'><i class="fa-brands fa-meta"></i> <span> MetaOpenSource</span></h5>
              </Link>
            </div>
            <div>
              <p>Copyright © Meta Platforms, Inc
              </p>
            </div>
            <div>
              <p><Link to="/">uwu?</Link></p>
            </div>
          </Col>
          <Col className='column  mt-5 mt-md-0'>
            <div>
                <h5 className='fw-semibold mb-3'>
              <Link to="/" > Learn React
              </Link></h5>
            </div>
            <div>
              <Link to="/">
                Quick Start
              </Link>
            </div>
            <div>
              <Link to="/">
                Installation
              </Link>
            </div>
            <div>
              <Link to="/">
                Describing the UI
              </Link>
            </div>
            <div>
              <Link to="/">
                Adding Interactivity
              </Link>
            </div>
            <div>
              <Link to="/">
                Managing State
              </Link>
            </div>
            <div>
              <Link to="/">
                Escape Hatches
              </Link>
            </div>
          </Col>
          <Col className='column  mt-5 mt-md-0'>
            <div>
                <h5 className='fw-semibold mb-3'>
              <Link to="/" > API Reference
              </Link></h5>
            </div>
            <div>
              <Link to="/">
                React APIs
              </Link>
            </div>
            <div>
              <Link to="/">
                React DOM APIs
              </Link>
            </div>
          </Col>
          <Col className='column  mt-5 mt-lg-0'>
            <div>
                <h5 className='fw-semibold mb-3'> 
              <Link to="/" >
              Community
              </Link>   
                </h5>
            </div>
            <div>
              <Link to="/">
                Code of Conduct
              </Link>
            </div>
            <div>
              <Link to="/">
                Meet the Team
              </Link>
            </div>
            <div>
              <Link to="/">
                Docs Contributors
              </Link>
            </div>
            <div>
              <Link to="/">

                Acknowledgements
              </Link>
            </div>
          </Col>
          <Col className='column  mt-5 mt-lg-0'>
            <div>
                <h5 className='fw-semibold mb-3'>
              <Link to="/" > More
              </Link></h5>
            </div>
            <div>
              <Link to="/">
              Blog
              </Link>
            </div>
            <div>
              <Link to="/">React Native
              </Link>
            </div>
            <div>
              <Link to="/">
                Privacy
              </Link>
            </div>
            <div>
              <Link to="/">Terms
              </Link>
            </div>
            <div className='mt-4'>
              <Link to="/">
              <i class="fa-brands fa-facebook fs-5 me-2"></i>
              </Link>
              <Link to="/">
              <i class="fa-brands fa-x-twitter fs-5 me-2"></i>
              </Link>
              <Link to="/">
                <i class="fa-brands fa-bluesky fs-5 me-2"></i>
              </Link>
              <Link to="/">
                <i class="fa-brands fa-square-github fs-5 "></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;