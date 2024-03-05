import React, { useState } from 'react';
import './Product.css';

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [value, setValue] = useState(props.value); // Inicializa o estado para controlar o valor
  

  // Função para aumentar a quantidade
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      updateValue(newQuantity);
      return newQuantity;
    });
  };

  // Função para diminuir a quantidade, com limite mínimo de 1
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity - 1;
        updateValue(newQuantity);
        return newQuantity;
      });
    }
  };

  // Função para atualizar o valor com base na quantidade
  const updateValue = (newQuantity) => {
    const newValue = props.value * newQuantity; // Correção na sintaxe aqui
    setValue(newValue);
  };

  return (
    <div className='product'>
      <div className='product-container'>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <div className='value'>
          <h3 className='item-value'>RS {value.toFixed(2)}</h3>
          <div className='add-remove-item'>
            <button className='remove' onClick={decreaseQuantity}>
              -
            </button>
            <h3>{quantity}</h3>
            <button className='add' onClick={increaseQuantity}>
              +
            </button>
            <button onClick={() => props.addToCart({ product: props, quantity: quantity })} className='add-to-cart'>
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
      <img src={props.img} alt='Logo' />
    </div>
  );
};

export default Product