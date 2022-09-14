import React from 'react';
import ReactDOM from 'react-dom';

import './app.scss';
import { PingID } from "./components/PingID.jsx";
import { ReactApp } from './components/reactApp.jsx';

const pingIDDomContainer = document.querySelector('#pingid');
ReactDOM.render(
    (<PingID />),
    pingIDDomContainer
);
const reactAppDomContainer = document.querySelector('#reactapp');
ReactDOM.render(
    (<ReactApp />),
    reactAppDomContainer
);