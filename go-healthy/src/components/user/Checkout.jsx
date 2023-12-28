import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../UI/common-section/CommonSection';
import Helmet from '../Helmet/Helmet';
import '../../styles/checkout.css';
import axios from 'axios';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const Checkout = () => {
  const [enterName, setEnterName] = useState('');
  const [enterNumber, setEnterNumber] = useState('');
  const [enterAddress, setEnterAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 0;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = async (e) => {
    e.preventDefault();

    // Ambil item dari keranjang belanja
    const itemsInCart = cartItems.map((item) => ({
      id: item.id,
      title: item.title,
      quantity: item.quantity,
      price: item.price,
    }));

    // Hitung totalAmount
    const calculatedTotalAmount = cartTotalAmount + shippingCost;

    try {
      const response = await axios.post('http://localhost:8080/api/order', {
        name: enterName,
        phone: enterNumber,
        address: enterAddress,
        paymentMethod,
        items: JSON.stringify(itemsInCart),
        totalAmount: calculatedTotalAmount.toFixed(2),
      });

      console.log('Respon API:', response.data);

      if (response.data.status === 201) {
        // Tampilkan SweetAlert setelah pembayaran berhasil
        Swal.fire({
          title: 'Pembayaran Berhasil',
          text: response.data.messages?.success || 'Pembayaran berhasil tanpa pesan sukses tambahan',
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: 'Order',
          cancelButtonText: 'Back',
        }).then((result) => {
          if (result.isConfirmed) {
            // Arahkan pengguna ke halaman Order atau lakukan tindakan lainnya
            console.log('Pengguna memilih Order');
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Arahkan pengguna ke halaman Back atau lakukan tindakan lainnya
            console.log('Pengguna memilih Back');
          }
        });
      } else {
        // Tampilkan SweetAlert dengan pesan kesalahan
        Swal.fire({
          title: 'Oops...',
          text: response.data.messages?.error || 'Terjadi kesalahan saat melakukan pembayaran',
          icon: 'error',
        });
      }
    } catch (error) {
      // Tampilkan SweetAlert dengan pesan kesalahan
      Swal.fire({
        title: 'Oops...',
        text: 'Terjadi kesalahan saat melakukan pembayaran',
        icon: 'error',
      });
    }
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length > 0 && (
                <Row className="mt-4">
                  <Col lg="12">
                    <h4>Items in Your Cart:</h4>
                    <ul>
                      {cartItems.map((item) => (
                        <li key={item.id}>
                          <div className="checkout__product-item">
                            <img
                              src={`http://localhost:8080/gambar/${item.image01}`}
                              alt={item.title}
                              className="checkout__product-image"
                            />
                            <div className="checkout__product-details">
                              <div className="product-details-right">
                                <h5>{item.title}</h5>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: Rp.{(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              )}

              <div className="checkout__bill mt-4">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal : <span>Rp. {cartTotalAmount.toFixed(2)}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3 ">
                  Ongkos Kirim : <span>Rp. {shippingCost.toFixed(2)}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between ">
                    Total : <span>Rp. {totalAmount.toFixed(2)}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col lg="12">
              <h6>Shipping Address:</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Enter your phone number"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your address"
                    required
                    onChange={(e) => setEnterAddress(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <label>Payment Method:</label>
                  <div className="payment-method">
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        checked={paymentMethod === 'cash'}
                      />
                      Cash
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="online"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        checked={paymentMethod === 'online'}
                      />
                      Online Payment
                    </label>
                  </div>
                </div>

                <button type="submit" className="addTOCart__btn">
                  Payment
                </button>
              </form>
              
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
