import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Homecomponent.css';

function Homecomponent() {

  const data = [
    {
      icon:"fa-solid fa-plane fs-2",
      title: "CNC WEB WORLD",
      subtitle: "Hello"
    },
    {
      icon: "fa-solid fa-flag-checkered fs-2",
      title: "CNC_WEB_WORLD",
      subtitle: "Hello , Hi!!!"
    },
    {
      icon: "fa-solid fa-medal fs-2",
      title: "CNC-WEB-WORLD",
      subtitle: "Hello , Namaste !!!"
    },
    {
      icon: "fa-solid fa-trophy fs-2",
      title: "CNC Web World",
      subtitle: "Hello , How are you?"
    }
  ]
  const Column = ({data}) => {
    return (
      <Col sm={6} className=' p-3 rouned-3 shadow  border  my-3'>
        <div className="icon_box">
        <i class={data.icon}></i>
       </div>
        <h3 className='mt-4'>{data.title}</h3>
        <p>{data.subtitle}</p>
      </Col>
    )
  }
  return (
    <div className='Homecomponent'>
      <Container className='text-center px-5 px-sm-0'>
        <Row className='py-5 '>
          {
            data.map((item, index) => {
              return <Column data={item} key={index} />
            })
          }
          {/* same content repeat multiple time so use internal component */}
        </Row>
      </Container>

    </div>
  )
}


export default Homecomponent;