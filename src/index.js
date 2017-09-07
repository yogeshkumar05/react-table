import ReactDOM from 'react-dom';
import React from 'react';
import MainPage from './components/MainPage';
import { Provider } from "react-redux"
import store from "./store"
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.scss'

ReactDOM.render(<Provider store={store}>
    <MainPage /></Provider>, document.getElementById("container"));