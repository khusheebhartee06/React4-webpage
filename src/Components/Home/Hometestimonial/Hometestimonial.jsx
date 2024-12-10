import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./Hometestimonial.css"

function Hometestimonial() {
    const boxdata =
        [
            {
                client_icon: "client1.jpg",
                subtitle: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
                title: "- Carly Ferris, Strews Inc"
            },
            {
                client_icon: "client2.jpg",
                subtitle: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
                title: "- Imani Olowe, Golstra Inc"
            },
            {
                client_icon: "client3.webp",
                subtitle: "Boost your product and service's credibility by adding testimonials from your clients.",
                title: "- Neil Tran, Henlow Express"
            }
        ];
    const Client_boxes = ({ data }) => {
        return (
            <Col md={4} sm={6} className='p-3 mx-auto d-flex'>
            <div className='box'>
                <div className="client_icon_box">
                    <img src={data.client_icon} className='img-fluid' alt="" />
                </div>
                <p>{data.subtitle}</p>

                <h5 className='fw-semibold'>{data.title}</h5>
            </div>
        </Col>
        )
    };
    return (
        <div className='Hometestimonial'>
            <Container fluid="lg" className='py-5 text-center'>
                <Row >
                    <Col md={5} sm={8} className='mx-auto'>
                        <h2 className='fw-semibold'>Client Testimonials</h2>
                        <p>Boost your product and service's credibility by
                            adding testimonials from your clients.</p>
                    </Col>
                </Row>
                <Row className='py-4'>
                    {
                        boxdata.map((item, index) => {
                            return <Client_boxes data={item} key={index} />
                        })
                    }

                </Row>
            </Container>

        </div>
    )
}

export default Hometestimonial;