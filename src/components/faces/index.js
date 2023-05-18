import React from 'react';
import './faces.css';

const Faces = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.foto})` }}
      className='faces'
    />
  );
};

export default Faces;
