import ReactDom from 'react-dom';
import React from 'react';
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
  document.getElementById('root'));
