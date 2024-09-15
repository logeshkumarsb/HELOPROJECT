import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Car from './components/car'
import Garage from './components/garage';
import reportWebVitals from './reportWebVitals';
// import Garage from './components/garage';
import Apple from './classComponents/Apple'
import ListGen from './list/ListGen';
import Header from './cssStyling/Header';
import ChangeText from './state/ChangeText';
import Form from './examples/Form';
import DomAccess from './examples/DomAccess';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Garage/>
    <Header/>
    {/* <Car brand="bmw" color="white"/>  */}
    {/* <Apple/>  */}
    <DomAccess/>
    {/* <ListGen/> */} 
    {/* <Form/> */}
    {/* <ChangeText/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
