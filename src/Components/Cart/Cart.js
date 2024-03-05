import React, { useState, useEffect, useRef } from 'react';
import './Cart.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = (props) => {
  const [clicked, setClicked] = useState(false);
  const cartRef = useRef(null);

  const handleClick = () => {
    // Abre o carrinho apenas se estiver fechado
    if (!clicked) {
      setClicked(true);
    }
  };

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const increaseQuantity = (index) => {
    const updatedCart = [...props.productsOnCart];
    updatedCart[index] = {
      ...updatedCart[index],
      quantity: updatedCart[index].quantity + 1,
    };
    props.setProductsOnCart(updatedCart);
  };
  
  const decreaseQuantity = (index) => {
    if (props.productsOnCart[index].quantity > 1) {
      const updatedCart = [...props.productsOnCart];
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: updatedCart[index].quantity - 1,
      };
      props.setProductsOnCart(updatedCart);
    }
  };

  const removeItem = (index) => {
    const updatedCart = [...props.productsOnCart];
    updatedCart.splice(index, 1);
    props.setProductsOnCart(updatedCart);
  };

  const linkwpp = () => {
    if (props.productsOnCart.length === 0) {
      alert('O carrinho está vazio. Adicione itens antes de finalizar o pedido.');
      return;
    }

    const message = props.productsOnCart.map((item) => {
      return `Item: ${item.title} Quantidade: ${item.quantity}`;
    }).join(', ');

    const link = `https://wa.me/5511987859577?text=Eu%20quero%20fazer%20um%20pedido%20do%20${message}`;
    window.open(link);
  };

  // Renderiza o componente apenas se houver itens no carrinho
  if (props.productsOnCart.length === 0) {
    return null
  }

  return (
    <div>
      <div ref={cartRef} className={`cart ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
        <h3>Ver carrinho</h3>
        <ul>
          {props.productsOnCart.map((item, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={faXmark} onClick={() => removeItem(index)} />
              <div className='item-description'>
                <h5 className='brand'>{item.brand}</h5>
                <div>-</div>
                {item.title}
              </div>
              <p className='value'>R${item.value * item.quantity}</p>
              <div className='add-remove-item'>
                <button className='remove' onClick={() => decreaseQuantity(index)}>
                  -
                </button>
                <h4>{item.quantity}</h4>
                <button className='add' onClick={() => increaseQuantity(index)}>
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button className='buy' onClick={linkwpp}>Finalizar pedido</button>
      </div>
    </div>
  );
};

export default Cart;
