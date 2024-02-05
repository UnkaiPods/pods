import React from 'react'
import Product from '../Product/Product'
import './Products.css'

const Products = () => {
  return (
    <div className='products'>
    <ul className='ignite' >
    <h1>Ignite</h1>
    <li>
      <Product />
    </li>
    <li>
      <Product />
    </li>
    <li>
      <Product />
    </li>
    </ul>
    <ul className='oxbar'>
    <h1>Oxbar</h1>
    <li>
      <Product />
    </li>
    <li>
      <Product />
    </li>
    <li>
      <Product />
    </li>
    </ul>
    <ul className='lost'>
    <h1>Lost</h1>
    <li>
      <Product />
    </li>
    <li>
      <Product />
    </li>
    <li>
      <Product />
    </li>
    </ul>
    <ul className='elfbar'>
    <h1>Elfbar</h1>
    <li>
      <Product />
    </li>
    <li>
      <Product />
    </li>
    <li>
      <Product />
    </li>
    </ul>
    </div>
  )
}

export default Products
