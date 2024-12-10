import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Homeservice.css';

function Homeservice() {
    const data = [
        {
            icon: "fa-solid fa-business-time fs-1",
            title: "BUSINESS MODEL"
        },
        {
            icon: "fa-solid fa-fax fs-1",
            title: "BUSINESS EXECUTION"
        },
        {
            icon: "fa-solid fa-city fs-1",
            title: "BUSINESS MONITORING"
        }];
    const Boxes = ({ data }) => {
        return (
            <Col md={4} sm={6} className='p-3 mx-auto'>
                <div className='box'>
                    <div className="icon_box">
                        <i class={data.icon}></i>

                    </div>
                    <h5 className='fw-semibold'>{data.title}</h5>
                    <p>You can also use this space for other
                        purposes where the information is best presented as mere teasers to  other individualized pages.</p>
                </div>
            </Col>
        );
    };
    return (
        <div className='Homeservice py-5'>
            <Container fluid="lg" >
                <Row >
                    <Col md={8}>
                        <h2 className="fw-semibold">Our Services</h2>
                        <p className='fs-5 '>
                            Share your services or product offerings here. Present them as simple headers that
                            can lead out to their pages where you can expound on them further. You can also
                            use this space for other purposes where the information is best presented as mere
                            teasers to other individualized pages.
                        </p>
                    </Col>
                </Row>
                <Row>
                    {
                        data.map((item, index) => {
                            return <Boxes data={item} key={index} />
                        })
                    }

                </Row>
            </Container>
        </div>
    )
}

export default Homeservice;