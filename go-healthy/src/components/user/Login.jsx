import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import {useAuth} from '../../hooks/AuthContext'

const Login = () => {
  const { dispatch } = useAuth();
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const email = loginNameRef.current.value;
      const password = loginPasswordRef.current.value;

      const response = await axios.post('http://localhost:8080/login', { email, password });

      if (response.data.status === 'success') {
        // Simpan data session di localStorage
        localStorage.setItem('user_id', response.data.user_id);
        localStorage.setItem('user_name', response.data.user_name);
        localStorage.setItem('user_email', response.data.user_email);

      console.log('Login Successfull', response.data);
      
      // Show success alert
      window.alert('Welcome!');
  
      // Redirect after successful registration
      navigate("/profile");
      } else {
        setErrorMessage('Login failed. Email or password is incorrect.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setErrorMessage('An error occurred during login. Please try again.');
    }
  };

  // Implement logout function
  const logout = () => {
    navigate('/login');
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
                {errorMessage && (
                  <p style={{ color: 'red' }}>{errorMessage}</p>
                )}
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
              <br />
              <button type="button" className="addTOCart__btn" onClick={logout}>
                Logout
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
