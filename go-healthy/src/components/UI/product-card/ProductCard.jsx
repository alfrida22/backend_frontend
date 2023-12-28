import React from "react";
import "../../../styles/product-card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id_produk, nama_produk, gambar_produk, harga_produk } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: id_produk,
        title: nama_produk,
        image01: gambar_produk,
        price: harga_produk,
      })
    );
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={`http://localhost:8080/gambar/${gambar_produk}`} alt={nama_produk} className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id_produk}`}>{nama_produk}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">Rp.{harga_produk}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// import React from "react";
// import "../../../styles/product-card.css";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../../../store/shopping-cart/cartSlice";

// const ProductCard = (props) => {
//   const { id_produk, nama_produk, gambar_produk, harga_produk } = props.item;
//   const dispatch = useDispatch();

//   const addToCart = async () => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/cart/add/${id_produk}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           id_produk: id_produk,
//         }),
//       });


//       const data = await response.json();

//       if (response.ok) {
//         dispatch(
//           cartActions.addItem({
//             id: id_produk,
//             title: nama_produk,
//             image01: gambar_produk,
//             price: harga_produk,
//           })
//         );
//         console.log(data.message);
//       } else {
//         console.error(data.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="product__item">
//       <div className="product__img">
//         <img src={`http://localhost:8080/gambar/${gambar_produk}`} alt={nama_produk} className="w-50" />
//       </div>

//       <div className="product__content">
//         <h5>
//           <Link to={`/foods/${id_produk}`}>{nama_produk}</Link>
//         </h5>
//         <div className="d-flex align-items-center justify-content-between">
//           <span className="product__price">Rp.{harga_produk}</span>
//           <button className="addTOCart__btn" onClick={addToCart}>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

