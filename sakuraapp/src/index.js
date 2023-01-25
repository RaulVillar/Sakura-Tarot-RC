import React from 'react';
import ReactDOM from 'react-dom';
import { Api } from './Components/SakuraCards';
import { Header } from './Components/Header';

ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Api />, document.getElementById("root"));