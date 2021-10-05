import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Product.css';

function ProducPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://c555926e-c811-4837-a109-3a81c0b97a7c.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
        console.log('resut', result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  if (product === null) {
    return <div>받는중 ...</div>;
  }
  console.log('product', product);
  return (
    <div>
      <div id="image-box">
        <img src={'/' + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src={'/images/icons/avatar.png'} />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{`${product.price}원`}</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}
export default ProducPage;
