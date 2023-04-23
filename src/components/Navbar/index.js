import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

const Navigator = () => {
  return (
    <Navbar
      className='nav-container'
      style={{ backgroundColor: '#35363A' }}
      expand='lg'
      variant='dark'
    >
      <Navbar.Brand style={{ padding: 0 }} href='/'>
        <img
          style={{ width: 50, height: 40 }}
          src='images/logolam.png'
          alt='lam'
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Link href='/' style={{ marginRight: 20 }} active>
            Início
          </Nav.Link>
          <Nav.Link href='/ferramentas' style={{ marginRight: 20 }} active>
            Ferramentas
          </Nav.Link>
          <Nav.Link href='/equipe' style={{ marginRight: 20 }} active>
            Equipe
          </Nav.Link>
          <Nav.Link href='/contato' style={{ marginRight: 20 }} active>
            Contato
          </Nav.Link>
          <Nav.Link href='/mission' style={{ marginRight: 20 }} active>
            Missão
          </Nav.Link>
          <Nav.Link href='/feed' style={{ marginRight: 20 }} active>
            Publicações
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link
            className='nav-image'
            href='https://ww2.uft.edu.br/'
            target='_blank'
          >
            <img className='navbar-image' src='images/uft.png' alt='uft' />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigator;
