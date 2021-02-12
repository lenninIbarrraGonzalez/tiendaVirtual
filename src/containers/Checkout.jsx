import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
// import CheckoutItem from '../components/CheckoutItem';
import '../styles/components/Checkout.css';

const Checkout = () => {
  // conectamos con appContext y traemos el stado y la funcion de remover
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  // Creamos una función para eliminar
  const handleRemove = (product, i) => () => {
    // funcion del estado inicial que esta en el hook
    removeFromCart(product, i);
  }

  // funcion para mostart el total
  const handleSumTotal = () => {
    // EcmaScript 6
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className='Checkout'>
      <div className='Checkout-content'>
        {/* iteramos lo que tiene cart  */}
        {cart.length > 0 ? <h3>Lista de Pedidos</h3> : <h3>Sin pedidos</h3>}
        {cart.map((item, i) => (
          <div className='Checkout-item'>
            <div className='Checkout-element'>
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
            <button type='button' onClick={handleRemove(item, i)}>
              <i className='fas fa-trash-alt' />
            </button>
          </div>
        ))}
        {/* {cart.map((item) => (
          <CheckoutItem product={item} handleRemove={handleRemove(item)} />
        ))} */}
      </div>
      {cart.length > 0 && (
        <div className='Checkout-sidebar'>
          <h3>{`Precio total: $ ${handleSumTotal()}`}</h3>
          <Link to='/checkout/information'>
            <button type='button'>Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
