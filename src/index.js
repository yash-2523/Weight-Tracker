import React from 'react';
import ReactDOM from 'react-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import 'bootstrap-css-only/css/bootstrap.min.css'; 
// import 'mdbreact/dist/css/mdb.css';
import App from './App';
import AuthContextProvider from './context/Auth';
import LoaderContextProvider from './context/Loader';

ReactDOM.render(<AuthContextProvider><LoaderContextProvider><App/></LoaderContextProvider></AuthContextProvider> , document.getElementById('root'));