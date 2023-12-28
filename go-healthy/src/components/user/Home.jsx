import React, { useState, useEffect } from "react";
import axios from 'axios';

import Helmet from '../../components/Helmet/Helmet.js';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

import background from '../../assets/images/background-oren.png';
import "../../styles/home-section.css";
import { Link } from 'react-router-dom';

import Category from "../../components/UI/category/Category.jsx";
import '../../styles/home.css';

import featureImg01 from "../../assets/images/service-01.png";
import featureImg02 from "../../assets/images/service-02.png";
import featureImg03 from "../../assets/images/service-03.png";

import products from "../../assets/fake-data/products.js";

import foodCategoryImg01 from "../../assets/images/salad.png";
import foodCategoryImg02 from "../../assets/images/smoothie.png";
import foodCategoryImg03 from "../../assets/images/pasta.png";

import ProductCard from '../../components/UI/product-card/ProductCard.jsx';

import whyImg from "../../assets/images/location.png";
import testimonial from "../../assets/images/testi.png";
import TestimonialSlider from "../../components/UI/slider/TestimonialSlider.jsx";


const featureData = [
    {
      title: "Quick Delivery",
      imgUrl: featureImg01,
      desc: "Get your favorite dishes delivered fast and fresh to your doorstep.",
    },
  
    {
      title: "Custom Your Food",
      imgUrl: featureImg02,
      desc: "Personalize your food just the way you like it. Create your perfect healthy meal.",
    },
    {
      title: "Easy Pick Up",
      imgUrl: featureImg03,
      desc: "Effortless and convenient food pickup options for when you're on the go.",
    },
  ];
  

  const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const [allProducts, setAllProducts] = useState([]);
    const [category, setCategory] = useState('ALL');

  
    useEffect(() => {
      getDataProduk();
    }, [category]);
  
    const getDataProduk = async () => {
      try {
        const response = await axios.get('http://localhost:8080/produk');
        const products = response.data.produk;
  
        // Filter products based on category
        const filteredProducts =
          category === 'ALL' ? products : products.filter((item) => item.category === category);
  
        setAllProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  return <Helmet title="Home">
    <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className='hero__content'>
                        {/* <h5 className='mb-3'>Stay Healthy and Choose Your Taste</h5> */}
                        <h1 className='mb-4 hero__title'><span>Stay Healthy and </span><span><br/>
                        Choose Your Taste</span></h1>
                        <p>We make and deliver the most delicious food that is good for your health. 
                            Find your favorites now and eat what you like</p>
                        <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                        <button className="order__btn d-flex align-items-center justify-content-between">
                            Order now <i class="ri-arrow-right-s-line"></i>
                        </button>

                        <button className="all__foods-btn">
                            <Link to="/foods">See all foods</Link>
                        </button>
                        </div>
                    </div>
                    <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                    <p className=" d-flex align-items-center gap-2 ">
                        <span className="shipping__icon">
                        <i class="ri-car-line"></i>
                        </span>{" "}
                        No shipping charge
                    </p>

                    <p className=" d-flex align-items-center gap-2 ">
                        <span className="shipping__icon">
                        <i class="ri-shield-check-line"></i>
                        </span>{" "}
                        100% secure checkout
                    </p>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className='hero__img'>
                        <img src={background} alt="background" className='w-100'/>
                    </div>
                </Col>
                
            </Row>
        </Container>
    </section>
    <section>
    <Category/>
    </section>

    <section>
        <Container>
            <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                We Will <span>Take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
              Enjoy the convenience of home delivery.We're here to satisfy your culinary needs.
              </p>
              <p className="feature__text">
              We are ready to serve you wholeheartedly, and don't forget to order again!{" "}
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
            </Row>
        </Container>
    </section>

    <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Salad" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Salad")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Salad
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Smoothies" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Smoothies")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Smoothies Bowl
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Noodle" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Noodle")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Noodle
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Choose Us?</span>
                </h2>
                <p className="tasty__treat-desc">
                Choosing GoHealthy means choosing quality, deliciousness, and exceptional service. <br/>We offer a diverse range of healthy dishes that you can customize to enjoy meals that align with your dietary preferences. 
                Food safety and customer satisfaction are our top priorities.<br/>
                We are dedicated to providing the best user experience with easy ordering and direct doorstep delivery. 
                Join us on the journey towards a healthier lifestyle, and discover why we are the top choice for delicious and healthy food.
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Fresh and healthy foods
                    </p>
                    <p className="choose__us-desc">
                    We offer fresh and healthy food options to keep you in top shape. 
                    Our dishes are prepared with high-quality ingredients, free from chemicals or preservatives, ensuring that every meal is a healthy choice.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Order from any
                      location
                    </p>
                    <p className="choose__us-desc">
                    You can order food from anywhere you are. Say goodbye to food worries while traveling or at home. 
                    Simply order through our app, and we'll deliver to your location.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Customize your Food{" "}
                    </p>
                    <p className="choose__us-desc">
                    We empower you to customize your food to suit your preferences. 
                    Whether it's adding or removing ingredients, adjusting portion sizes, or choosing from a variety of food options, every meal becomes a perfect fit for you with GoHealthy.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>



      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                Buyer testimonials at GoHealthy are the voices of our community sharing their extraordinary experiences in embracing a healthier lifestyle with us. 
                From the pleasure of indulging in healthy dishes to the ease of customizing their orders, these testimonials illustrate how GoHealthy has assisted them in achieving their health goals. It is tangible evidence that GoHealthy is the top choice for delicious and healthy food.
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={testimonial} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>




    </Helmet>;
};

export default Home;