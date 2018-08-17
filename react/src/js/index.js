import '../css/estilos.css';
import React from 'react';
import { render } from 'react-dom';
import Teachers from './components/teachers.js';
import data from './teachers.json';

render(<Teachers data={data} />, document.getElementById("container"));
