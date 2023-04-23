import React from 'react';
import './icons.css';
import { AiOutlineMail } from 'react-icons/ai';

const Icons = () => {
  return (
    <div className='icon-itens'>
      <AiOutlineMail size={50} color='blue' />
      <p style={{ paddingTop: 10 }}>Envie-nos um Email</p>
      <p>lam@uft.edu.br</p>
    </div>
  );
};

export default Icons;
