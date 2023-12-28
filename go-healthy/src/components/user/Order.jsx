import React, { useState, useEffect } from "react";
import CommonSection from "../UI/common-section/CommonSection";
import axios from 'axios';
import Helmet from "../Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import paidIcon from "./images/paid.png";
import bakeIcon from "./images/bake.png";
import bikeIcon from "./images/bike.png";
import deliveredIcon from "./images/delivered.png";
import styles from "../../styles/order.css"; // Pastikan impor styles sudah benar

const Order = () => {
  const [shipmentData, setShipmentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/delivery");
        if (response.data.data.length > 0) {
          const simplifiedData = {
            id_delivery: response.data.data[0].id_delivery,
            nama_pembeli: response.data.data[0].nama_pembeli,
            alamat: response.data.data[0].alamat,
            nomor_handphone: response.data.data[0].nomor_handphone,
          };
          setShipmentData(simplifiedData);
        } else {
          // Handle case when the array is empty
          console.log("No shipment data available.");
        }
      } catch (error) {
        console.error("Error fetching delivery data:", error);
      }
    };
  
    fetchData();
  }, []);
  

  const [orderStatus, setOrderStatus] = useState({
    pembayaran: false,
    pemrosesan: false,
    pengiriman: false,
    selesai: false,
  });

  useEffect(() => {
    // Update status pesanan berdasarkan data pengiriman
    if (shipmentData) {
      setOrderStatus({
        pembayaran: shipmentData.status_pembayaran,
        pemrosesan: shipmentData.status_pemrosesan,
        pengiriman: shipmentData.status_pengiriman,
        selesai: shipmentData.status_selesai,
      });
    }
  }, [shipmentData]);

  const statusClass = (index) => {
    if (index === 0) return styles.paid;
    if (index === 1) return styles.bake;
    if (index === 2) return styles.bike;
    if (index === 3) return styles.delivered;
  };

  const handleConfirmOrder = () => {
    console.log("Order Confirmed");
    setOrderStatus({
      ...orderStatus,
      selesai: true,
    });
  };

  return (
    <Helmet title="Tracking Order">
      <CommonSection title="Tracking Your Order" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="mt-4">
                {shipmentData && (
                  <>
                    <p>
                      <strong>ID Pengiriman:</strong> {shipmentData.id_delivery}
                    </p>
                    <p>
                      <strong>Nama Pembeli:</strong> {shipmentData.nama_pembeli}
                    </p>
                    <p>
                      <strong>Alamat:</strong> {shipmentData.alamat}
                    </p>
                    <p>
                      <strong>Nomor Handphone:</strong> {shipmentData.nomor_handphone}
                    </p>
                    

                    <div className={styles.statusContainer}>
                      {/* Menampilkan kondisi pengiriman dalam bentuk gambar */}
                      <Row className={styles.statusRow}>
                        {Array.from({ length: 4 }, (_, index) => (
                          <Col key={index} className={styles.statusCol}>
                            <div className={`${statusClass(index)} ${orderStatus[getStatusKey(index)]}`}>
                              <img src={getStatusIcon(index)} width={30} height={30} alt={`Status ${index}`} />
                              <span>{getStatusText(index)}</span>
                            </div>
                          </Col>
                        ))}
                      </Row>

                      {/* Tombol konfirmasi pesanan selesai */}
                      {!orderStatus.selesai && (
                        <button
                          className={`${styles.confirmButton} ${styles.button}`}
                          onClick={handleConfirmOrder}
                          disabled={!orderStatus.pengiriman}
                        >
                          Konfirmasi Pesanan Selesai
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Order;

// Helper function to get status key based on index
const getStatusKey = (index) => {
  switch (index) {
    case 0:
      return "pembayaran";
    case 1:
      return "pemrosesan";
    case 2:
      return "pengiriman";
    case 3:
      return "selesai";
    default:
      return "";
  }
};

// Helper function to get status icon based on index
const getStatusIcon = (index) => {
  switch (index) {
    case 0:
      return paidIcon;
    case 1:
      return bakeIcon;
    case 2:
      return bikeIcon;
    case 3:
      return deliveredIcon;
    default:
      return "";
  }
};

// Helper function to get status text based on index
const getStatusText = (index) => {
  switch (index) {
    case 0:
      return "Pembayaran";
    case 1:
      return "Persiapan";
    case 2:
      return "Perjalanan";
    case 3:
      return "Terkirim";
    default:
      return "";
  }
};