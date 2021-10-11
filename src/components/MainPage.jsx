import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MainPage.css';
const MainPage = () => {
  const [product, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get('http://localhost:8080/products')
      .then(function (result) {
        // console.log('result.data',result.data.products)
        const product = result.data.products;
        setProducts(product);
        //  console.log(product)
      })
      .catch(function (error) {
        // console.error("에러 발생 : ", error);
      });
  }, []);
  return (
    <div>
      <div id="banner">
        <img src="images/banners/banner1.png"></img>
      </div>
      <h1>판매되는 상품들</h1>
      <div id="product-list">
        {product.map((list, index) => {
          // console.log(list)
          return (
            <div className="product-card">
              <Link to={`/products/${list.id}`}>
                <img key={index} class="product-img" src={`${list.imageUrl}`}></img>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
