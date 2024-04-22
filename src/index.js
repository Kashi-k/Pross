import React from 'react'; //importing the class of react form react library
import ReactDOM from 'react-dom/client'; // 
import './index.css';
import reportWebVitals from './reportWebVitals';
//import MyForm from './MyForm';
//import AppQuote from './AppQuote';
//import Calculator from './calculator';
//import WeatherDisplay from './Weather';
//import SignUp from './Login/Sign-up/Signupp';
//import SignUpp from './New-Page/Signupp';
//import Mainnn from './New-Page/Main-page';
//import App from './Router/App';
import User from './users';
//import InputButton from './InputButton';

//import BasketPage from './BasketPage';
//import "bootstrap/dist/css/bootstrap.css"
//import ProjectProps from './project-props'
//import Login from './login';
//import Signup from './sign-up';
//import BasketCounter from './BasketCounter.jsx';
//import App from './App.jsx'
//import Add from "./new-proj/Add.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <User/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
