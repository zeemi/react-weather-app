import ReactDom from 'react-dom';
import React from 'react';
import App from "./components/App";

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

ReactDom.render(<App/>, document.getElementById('root'))
