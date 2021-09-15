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
            {product.map((list,index)=>{
              console.log(list)

              return(
                <img key={index} class="productImg"src={`${list.imageUrl}`}></img>
              )
              })
            }
        </div>
    )
}

export default MainPage