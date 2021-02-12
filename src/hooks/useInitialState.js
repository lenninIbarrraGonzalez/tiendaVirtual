import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  // cart: [..state.cart, payload] trae lo que tenga cart el state y agregale lo que tiene payload
  const addToCart = payload => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });

  }

  // filter crea  un nuevo array con la condición enviada esto es JS
  const removeFromCart = (payload, indexToRemove) => {

    // console.log('payload', payload) // información que le pasamos
    // console.log('indexToRemove', indexToRemove) // indice del elemento a eliminar

    setState({
      ...state,
      cart: state.cart.filter((_item, indexCurrent) => indexCurrent !== indexToRemove)

    });
  };

  // retornamos  las funciones y el estado
  return {
    addToCart,
    removeFromCart,
    state,
  }
};

export default useInitialState;