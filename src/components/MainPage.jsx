import React from 'react'
import axios from 'axios'
import './MainPage.css'
const MainPage = () => {
    const [product, setProducts] = React.useState([]);
    React.useEffect(function () {
    axios
      .get(
        "http://localhost:8080/products"
      )
      .then(function (result) {
          // console.log('result.data',result.data.products)
        const product = result.data.products
         setProducts(product);
        //  console.log(product)
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);
    return (
        <div className="MainPageContainer">
          <div id ="header">
            <div id="header-area">
              <img src="images/icons/logo.png"/>
            </div>
          </div>
          <div id="body">
            <div id="banner">
              <img src="images/banners/banner1.png"></img>
            </div>
            <h1>판매되는 상품들</h1>
            <div id="product-list">
            {product.map((list,index)=>{
              console.log(list)

              return(
                <div className="product-card">
                <img key={index} class="product-img"src={`${list.imageUrl}`}></img>
                </div>
              )
              })
            }
            </div>
          </div>
        </div>
    )
}

export default MainPage