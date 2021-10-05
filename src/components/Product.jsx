import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
      </div>
    </div>
  );
}
export default ProducPage;
