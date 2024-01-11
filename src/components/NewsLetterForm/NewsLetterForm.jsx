import React, { useState } from 'react';
import {  ToastContainer} from 'react-toastify'
import { enviado, info, warning } from './Alert';

const NewsLetterForm = () => {

    const [email, setEmail] = useState('');
    
    const handleEnviar = () => {
        if (!email) {
          info('Por favor, ingresa tu email.');
        } else if (!validateEmail(email)) {
          warning('Por favor, introduce un email válido.');
        } else {
          enviado('Email enviado correctamente.');
        }
      };

    const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
    };


    return (
    <div className='grid grid-cols-1 gap-3 newsletter'>
      <h2 className='text-verdeprincipal font-bold'>¡NEWSLETTER!</h2>
      <input className=''
        type="email"
        placeholder="Email*"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <ToastContainer/>
      <button className='rounded text-lg  px-2 font-normal bg-verdePrincipal text-colorBgNavbar hover:bg-colorBgNavbar
         hover:text-verdePrincipal border-2 border-verdePrincipal'onClick={handleEnviar} >Enviar</button>
    </div>
  );
};

export default NewsLetterForm;
