import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './App';

const _root = document.getElementById( 'root' );

if ( _root.hasChildNodes() ) {
  hydrate( <App />, _root );
} else {
  render( <App />, _root );
}
