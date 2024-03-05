import React from 'react'
import Product from '../Product/Product'
import './Products.css'

const Products = ({addToCart, productsOnCart}) => {
  const addProduct = ({product, quantity}) => {
    addToCart([...productsOnCart, {
      description: product.description,
      img: product.img,
      quantity,
      title: product.title,
      value: product.value, 
      brand: product.brand
    }]);
  }

  const IgniteProducts = [
    {
      id: 1,
      brand: "Ignite",
      title: 'v40 1',
      description: 'Descrição do Produto 1',
      img: 'assets/unkai-logo.png',
      value: 33.00,
    },
    {
      id: 2,
      title: 'v50 2',
      brand: "Ignite",
      description: 'Descrição do Produto 1',
      img: 'assets/unkai-logo.png',
      value: 30.00,
    },
    {
      id: 3,
      title: 'Produto 3',
      brand: "Ignite",
      description: 'Descrição do Produto 1',
      img: 'assets/unkai-logo.png',
      value: 30.00,
    },
    {
      id: 4,
      title: 'Produto 4',
      brand: "Ignite",
      description: 'Descrição do Produto 1',
      img: 'assets/unkai-logo.png',
      value: 30.00,
    }
  ];

  const oxbarProducts = [
    {
      id: 5,
      brand: "Oxbar",
      title: 'v40 1',
      description: 'Descrição do Produto 1',
      img: 'assets/unkai-logo.png',
      value: 30.00,
    },
    {
      id: 6,
      brand: "Oxbar",
      title: 'v50 2',
      description: 'Descrição do Produto 1',
      img: 'assets/unkai-logo.png',
      value: 30.00,
    },
    {
      id: 7,
      brand: "Oxbar",
      title: 'Produto 3',
      description: 'Descrição do Produto 1',
      img: 'assets/unkai-logo.png',
      value: 30.00,
    },
    {
      id: 8,
      brand: "Oxbar",
      title: 'Produto 4',
      description: 'Descrição do Produto 1',
      img: 'assets/unkai-logo.png',
      value: 30.00,
    }
  ];

  const lostProducts = [
    {
      id: 9,
      brand: "Lost",
      title: 'v40 1',
      description: 'Descrição do Produto 1',
      img: 'assets/unkai-logo.png',
      value: 30.00,
    },
    {
      id: 10,
      brand: "Lost",
      title: 'v50 2',
      description: 'Descrição do Produto 1',
      img: 'assets/unkai-logo.png',
      value: 30.00,
    },
    {
      id: 11,
      brand: "Lost",
      title: 'Produto 3',
      description: 'Descrição do Produto 1',
      img: 'assets/unkai-logo.png',
      value: 30.00,
    },
    {
      id: 12,
      brand: "Lost",
      title: 'Produto 4',
      description: 'Descrição do Produto 1',
      img: 'assets/unkai-logo.png',
      value: 30.00,
    }
  ];
  
  const elfbarProducts = [
    {
      id: 13,
      brand: "Elfbar",
      title: 'v40 1',
      description: 'Descrição do Produto 1',
      img: 'assets/unkai-logo.png',
      value: 30.00,
    },
    {
      id: 14,
      brand: "Elfbar",
      title: 'v50 2',
      description: 'Descrição do Produto 1',
      img: 'assets/unkai-logo.png',
      value: 30.00,
    },
    {
      id: 15,
      brand: "Elfbar",
      title: 'Produto 3',
      description: 'Descrição do Produto 1',
      img: 'assets/unkai-logo.png',
      value: 30.00,
    },
    {
      id: 16,
      brand: "Elfbar",
      title: 'Produto 4',
      description: 'Descrição do Produto 1',
      img: 'assets/unkai-logo.png',
      value: 30.00,
    }
  ];
  
  return (
    <div className='products'>
      <ul className='ignite' >
        <h1>Ignite</h1>
        {IgniteProducts.map((product) => (<li>
          <Product
            key={product.id}
            brand={product.brand}
            title={product.title}
            description={product.description}
            img={product.img}
            value={product.value}
            addToCart={addProduct}
          /> </li>
        ))}

      </ul>
      <ul className='oxbar'>
        <h1>Oxbar</h1>
        {oxbarProducts.map((product) => (<li>
          <Product
            key={product.id}
            brand={product.brand}
            title={product.title}
            description={product.description}
            img={product.img}
            value={product.value}      
            addToCart={addProduct}
          /> </li>
        ))}
      </ul>
      <ul className='lost'>
        <h1>Lost</h1>
        {lostProducts.map((product) => (<li>
          <Product
            key={product.id}
            brand={product.brand}
            title={product.title}
            description={product.description}
            img={product.img}
            value={product.value}                    
            addToCart={addProduct}
          /> </li>
        ))}
      </ul>
      <ul className='elfbar'>
        <h1>Elfbar</h1>
        {elfbarProducts.map((product) => (<li>
          <Product
            key={product.id}
            brand={product.brand}
            title={product.title}
            description={product.description}
            img={product.img}
            value={product.value}                   
            addToCart={addProduct}
          /> </li>
        ))}
      </ul>
    </div>
  )
}

export default Products