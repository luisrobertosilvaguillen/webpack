import '../css/estilos.css';
import makeMessage from './make-message.js';
import renderToDOM from './render-to-dom';
import { firstMessage, delayedMessage } from './messages.js';
import platziImg from '../images/platzi.png';
import videoMp4 from '../video/que-es-core.mp4';

const img = document.createElement('img')
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.append(img);


const vid1 = document.createElement('video')
vid1.setAttribute('src', videoMp4);
vid1.setAttribute('width', 480);
vid1.setAttribute('autoplay', true);
vid1.setAttribute('controls', true);
document.body.append(vid1);

renderToDOM(makeMessage(firstMessage));
delayedMessage();
