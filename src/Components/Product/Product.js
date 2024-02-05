import React, { useState } from 'react';
import './Product.css';

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [value, setValue] = useState(90.00); // Inicializa o estado para controlar o valor

  // Função para aumentar a quantidade
  const increaseQuantity = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      updateValue(newQuantity);
      return newQuantity;
    });
  }

  // Função para diminuir a quantidade, com limite mínimo de 1
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => {
        const newQuantity = prevQuantity - 1;
        updateValue(newQuantity);
        return newQuantity;
      });
    }
  }

  // Função para atualizar o valor com base na quantidade
  const updateValue = (newQuantity) => {
    const newValue = 90.00 * newQuantity;
    setValue(newValue);
  }

  return (
    <div className='product'>
      <div className='product-container'>
        <h4>IGNITE V50 – 5000 Puffs</h4>
        <p>Pod Descartável IGNITE V50 com 5000 Puffs 650 mAh 14 ml – 5% NicSalt</p>
       <div className='value'>
          <h3 className='item-value'>RS {value},00</h3>
          <div className='add-remove-item'>
          <button className='remove' onClick={decreaseQuantity}>-</button>
          <h3>{quantity}</h3>
          <button className='add' onClick={increaseQuantity}>+</button>
          <button className='add-to-cart'>Adicionar ao carrinho</button>
        </div>
      
        </div>
    
      </div>
      <img src='..\assets\unkai-logo.png' alt='Logo' />
    </div>
  );
}

export default Product;
