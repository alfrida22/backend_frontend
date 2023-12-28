import React from 'react';
import { Container, Row, Col, ListGroup,ListGroupItem} from 'reactstrap';
import logo from '../../assets/images/LOGO.png';
import { Link } from "react-router-dom";

import '../../styles/footer.css';

const Footer = () => {
    return <footer className='footer'>
        <Container>
            <Row>
               <Col lg='3' md='4' sm='6'>
               <div className="footer__logo text-start">
                <img src={logo} alt="logo"/>
                <h5>Stay healthy and choose your taste </h5>
                <p>We make and deliver the most delicious food that is good for your health. Find your favorites now and eat what you like</p>
                </div>
                </Col> 
               <Col lg='3' md='4' sm='6'>
                <h5 className='footer__title'>Delivery Time</h5>
                <ListGroup className='deliver__time-list'>
                    <ListGroupItem className='delivery__time-item border-0 ps-0'>
                        <span>Sunday - Thursday</span>
                        <p>10.00 - 20.00</p>
                    </ListGroupItem>

                    <ListGroupItem className='delivery__time-item border-0 ps-0'>
                        <span>Friday - Saturday</span>
                        <p>10.00 - 16.00</p>
                    </ListGroupItem>
                </ListGroup>
                </Col> 
               <Col lg='3' md='4' sm='6'>
               <h5 className='footer__title'>Contact</h5>
               <ListGroup className="deliver__time-list">
                <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Jl Raya Manis 32 Madiun Jawa Timur</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 081654821301</span>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: GoHealthy1@gmail.com</span>
              </ListGroupItem>
                </ListGroup>
                </Col> 
               <Col lg='3' md='4' sm='6'>
               <h5 className="footer__title">Review</h5>
            <p>Send a review about our food</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
                </Col> 
            </Row>

            <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2023, website made by GoHealthy. All Rights Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                {/* <Link to="https://www.facebook.com/muhib160"> */}
                <i class="ri-instagram-line"></i>
                {/* </Link>{" "} */}
              </span>
              <span>
                {" "}
                {/* <Link to="https://www.facebook.com/muhib160"> */}
                <i class="ri-whatsapp-line"></i>
                {/* </Link>{" "} */}
              </span>
            </div>
          </Col>
        </Row>
        </Container>
    </footer>

}
 

export default Footer;