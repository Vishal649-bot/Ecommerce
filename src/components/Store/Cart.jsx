import { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MyContext } from '../../MyContext';
import axios from 'axios';

function Cart() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    cartItems,
    updateCartItems
 } = useContext(MyContext)

 useEffect(() => {

  let email = localStorage.getItem('email');
  email = email.replace(/[@.]/g, '');
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://crudcrud.com/api/03d678802bf84a378b1b4ea97b9d0f23/cart${email}`);
      console.log(response);
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    } 
  };

  fetchData();  
 console.log('====================================');
 console.log(data);
 console.log('====================================');
  
 }, [])
//  

    
  const handleRemove = (title) => {
    updateCartItems((prevCartElements) =>
      prevCartElements.filter((item) => item.title !== title)
    );
  }; 

  return ( 
    <>
      <Button variant="primary" onClick={handleShow}>
       Cart
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ul>
        {data.map((cartItem) => (
          <li key={cartItem.product.title}>
            <h3>{cartItem.product.title}</h3>
            <img src={cartItem.product.imageUrl} height='100px' width='100px' alt={cartItem.title} />
            <p>Price: ${cartItem.product.price}</p>
            <p>Quantity: {cartItem.product.quantity}</p>
            <Button variant="danger" onClick={() => handleRemove(cartItem.title)}>
                  Remove
                </Button>
          </li>
        ))}
      </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;