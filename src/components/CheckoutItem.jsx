import React from 'react';

import '../styles/components/Checkout.css';

const CheckoutItem = ({ product, handleRemove }) => (
  <div className='Checkout-item'>
    <div className='Checkout-element'>
      <h4>{product.title}</h4>
      <span>
        $
        {product.price}
      </span>
    </div>
    <button type='button' onClick={handleRemove}>
      <i className='fas fa-trash-alt' />
    </button>
  </div>
);

export default CheckoutItem;