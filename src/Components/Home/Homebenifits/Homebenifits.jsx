import React from 'react';

import './Homebenifits.css';
import { Col, Container, Row } from 'react-bootstrap';

function Homebenifits() {
    const data = [{
        title: "100% Project based learning",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, delectus!"
    },
    {
        title: "Live call supports",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, delectus delectus!"

    },
    {
        title: "High chance of selection",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, delectus!"
    },
    {
        title: "Video Access Timing",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,"
    }
    ]
    const Rows = ({ data }) => {
        return (
            <Row>
                <Col className='col-2 '>
                    <div className="icon_box">
                        <i class="fa-solid fa-check"></i>
                    </div>
                </Col>

                <Col className='col-10'>
                    <h5 className='fw-semibold'>{data.title}</h5>
                    <p className='fw-semibold ' style={{ fontSize: "14px" }}>{data.subtitle}</p>
                </Col>
            </Row>
        )
    }
    return (
        <div className='Homebenifits'>
            <Container fluid="lg" className=' py-5'>
                <Row >
                    <Col >
                        <h2>Benifits of learning from</h2>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col  md={6}>
                        {
                            data.map((item, index) => {
                                return <Rows data={item} key={index} />
                            })
                        }
                    </Col>
                    <Col md={6}>
                        <img src="benifits_image.png" className='img-fluid rounded-circle' alt="" />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Homebenifits;