import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cartElements, setCartElements] = useState([

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ])
    
  const handleRemove = (title) => {
    setCartElements((prevCartElements) =>
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
        {cartElements.map((cartItem) => (
          <li key={cartItem.title}>
            <h3>{cartItem.title}</h3>
            <img src={cartItem.imageUrl} height='100px' width='100px' alt={cartItem.title} />
            <p>Price: ${cartItem.price}</p>
            <p>Quantity: {cartItem.quantity}</p>
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