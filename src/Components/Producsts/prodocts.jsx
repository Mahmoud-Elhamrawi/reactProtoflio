import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function Prodocts() {
  useEffect(() => {
    getDataOfProducts();
  }, []);

  const getDataOfProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  };

  const [products, setProducts] = useState([]);
  console.log(products);
  return (
    <div>
      {products.length > 0 ? (
        <div className="row">
          {products.map((ele, ind) => {
            return (
              <NavLink
                to={`/ProductDetails/${ele.id}`}
                key={ele.ind}
                className="col-md-4 p-3  shadow border"
              >
                <img
                  style={{ width: "300px", height: "300px" }}
                  src={ele.image}
                  className="w-100"
                  alt=""
                />
                <h2>{ele.title.slice(0, 10)}</h2>
                <hr />
                <h5>{ele.category}</h5>
                <p>{ele.description.slice(0, 20)}......</p>
                <h6>{ele.price} $</h6>
              </NavLink>
            );
          })}
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center py-5 m-5">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}
