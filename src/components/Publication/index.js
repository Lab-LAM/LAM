import React from 'react';
import './Publication.css';

function Publication(props) {
  return (
    <div className='publication-container'>
      <a href={props.doi} target='blank'>
        <h4>{props.title}</h4>
      </a>
      <p>{props.authors}</p>
    </div>
  );
}

export default Publication;
