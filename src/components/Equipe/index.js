import React from 'react';
import './equipe.css';
import { MdEmail } from 'react-icons/md';
import { SiResearchgate, SiOrcid } from 'react-icons/si';

const Equipe = (props) => {
  return (
    <div className='box'>
      <div
        style={{ backgroundImage: `url(${props.foto})` }}
        className='team-image'
      />
      <p>{props.nome}</p>
      <p className='team-formation' >{props.funcao}</p>
      <div className='team-icons'>
        <a href={props.researchgate} target='blank'>
          <SiResearchgate />
        </a>
        <a href={props.email} target='blank'>
          <MdEmail size={20} />
        </a>
        <a href={props.orcid} target='blank'>
          <SiOrcid />
        </a>
        <a href={props.curriculo} target='blank'>
          <img
            className='lattes-icon'
            src='images/lattes_icon.png'
            alt='lattes'
          />
        </a>
      </div>
    </div>
  );
};

export default Equipe;
