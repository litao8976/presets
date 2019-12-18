/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import logo from './assets/logo.svg';
import Button from './components/Button/Button';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Button>{process.env.REACT_APP_TEST_VAR}</Button>
        <nav>test scss</nav>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
