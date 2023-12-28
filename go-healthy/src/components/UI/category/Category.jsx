import React from "react";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";


import "../../../styles/category.css";

const categoryData = [
  {
    display: "Salad",
    imgUrl: categoryImg01,
  },
  {
    display: "Smoothies Bowl",
    imgUrl: categoryImg02,
  },

  {
    display: "Noodle",
    imgUrl: categoryImg03,
  },

];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="4" md="4" sm="6" xs="12" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;