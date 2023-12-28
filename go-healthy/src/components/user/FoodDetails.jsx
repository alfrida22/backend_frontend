import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Helmet from '../Helmet/Helmet';
import CommonSection from '../UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/shopping-cart/cartSlice';

import '../../styles/product-details.css';

const FoodDetails = () => {
  const [tab, setTab] = useState('desc');
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [previewImg, setPreviewImg] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
          const response = await axios.get(`http://localhost:8080/produk/${id}`);
          setProduct(response.data);
      } catch (error) {
          console.error('Error fetching product details:', error);
      }
  };
  

    fetchProduct();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const addItemToCart = () => {
    dispatch(cartActions.addItem({
      id,
      title: product?.nama_produk,
      price: product?.harga_produk,
      image01: product?.gambar_produk,
      quantity : 1,
    }));
  };

  if (!product) {
    // Menampilkan status loading atau menangani kesalahan
    return <div>Loading...</div>;
  }

  const { nama_produk, harga_produk, category, deskripsi_produk } = product;

  return (
    <Helmet title='Product-details'>
      <CommonSection title={nama_produk} />
      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
              <div className='product__images'>
                <div className='img__item mb-3' onClick={() => setPreviewImg(product.gambar_produk)}>
                  <img src={`http://localhost:8080/gambar/${product.gambar_produk}`} alt={product.nama_produk} className='w-100' />
                </div>
                {/* Tambahkan gambar-gambar tambahan jika ada */}
              </div>
            </Col>


            <Col lg='4' md='4'>
              <div className='product__main-img'>
                <img src={previewImg} alt='' className='w-100' />
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='single__product-content'>
                <h2 className='product__title'>{nama_produk}</h2>
                <span className='product__price'>{harga_produk}</span>
                <p className='category mb-5'>Category: <span>{category}</span></p>

                <button onClick={addItemToCart} className='addTOCart__btn'>Add to Cart</button>
              </div>
            </Col>

            <Col lg='12'>
              <div className='tabs d-flex align-items-center gap-3 py-2'>
                <h6 className='tab__active'>Description</h6>
              </div>

              <div className='tab__content'>
                <p>{deskripsi_produk}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
