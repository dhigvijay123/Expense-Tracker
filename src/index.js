import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Signup from './pages/Signup';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename=''>  <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/login>' element={<Login/>}></Route>
    <Route path='/singup>' element={<Signup/>}></Route>

  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
