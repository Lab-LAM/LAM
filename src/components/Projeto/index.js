import React from 'react';
import Button from 'react-bootstrap/Button';
import './project.css';

const Projeto = (props) => {
  return (
    <div className='container-project'>
      <div
        style={{ backgroundImage: `url(${props.url})` }}
        className='project-image'
      />
      <div className='content-projects'>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <Button
          href={props.site}
          disabled={props.disabled}
          target='_blank'
          variant='outline-secondary'
        >
          {props.buttonDescription}
        </Button>
      </div>
    </div>
  );
};

export default Projeto;
