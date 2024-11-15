import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"; 
// import {Store} from './redux/Store';
// import {Provider} from  'react-redux'; 


const app = ReactDOM.createRoot(document.getElementById("root"))
app.render(
  // <Provider store={Store}>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </Provider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
)