import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/components/Information.css';
import AppContext from '../context/AppContext';

const Information = () => {
  // llamamos el stado y la funcion de Appcontext
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);

  const { cart } = state;
  // haciendo uso de hook de terceros
  const history = useHistory();

  const handleSubmit = () => {
    // utilizando FormData para leer los datos del form
    // guardamos toda la información del formulario con form.current
    const formData = new FormData(form.current);
    // desustructurando 
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apt': formData.get('apt'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }

    addToBuyer(buyer);
    history.push('/checkout/payment')

  }

  return (
    <div className='Information'>
      <div className='Information-content'>
        <div className='Inforamtion-head'>
          <h2>Información de contacto</h2>
        </div>
        <div className='Information-form'>
          <form ref={form}>
            <input type='text' placeholder='Nombre completo' name='name' />
            <input type='text' placeholder='Correo electronico' name='email' />
            <input type='text' placeholder='Dirección' name='address' />
            <input type='text' placeholder='Apto' name='apto' />
            <input type='text' placeholder='Ciudad' name='city' />
            <input type='text' placeholder='País' name='country' />
            <input type='text' placeholder='Estado' name='state' />
            <input type='text' placeholder='Código postal' name='cp' />
            <input type='text' placeholder='Teléfono' name='phone' />
          </form>
        </div>
        <div className='Information-buttons'>
          <div className='Information-back'>
            <Link to='/checkout'>
              Regresar
            </Link>
          </div>
          <div className='Information-next'>
            <button type='button' onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </div>
      <div className='Information-siderbar'>
        <h3>Pedido</h3>
        {cart.map((item) => (
          <div className='Information-item' key={item.title}>
            <div className='Information-element'>
              <h4>{item.name}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}


      </div>
    </div>
  );
}
export default Information;
