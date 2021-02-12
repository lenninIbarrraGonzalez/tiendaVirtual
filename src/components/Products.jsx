import React, { useContext } from 'react'
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/components/Products.css';

const Products = () => {
  // Traemos el state y la fución del context
  const { state, addToCart } = useContext(AppContext);
  // Sacamos los productos del stado
  const { products } = state;

  // closure: un closure es una función que retorna otra función, la cual recuerda el contexto en el que fue declarada
  const handleAddToCart = product => () => {
    addToCart(product)
  }
  return (
    <div className='Products'>
      <div className='Products-items'>
        {
          products.map(product => (
            // creamos cada producto y le pasamos la información a cada uno
            <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
          ))
        }
      </div>
    </div>
  )
}

export default Products;