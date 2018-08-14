import { renderToDom } from './render-to-dom.js';
import makeMessage from './make-message';

const waiTime = new Promise((ok, error) => {
    setTimeout(() => {
        ok("Han pasado 3 segundos, wow!");
    }, 3000);
});
module.exports = {
    firstMessge: "Hola Mundo desde un Modulo",
    delayedMessage: async () => {
        const message = await waiTime;
        console.log(message);
        renderToDom(makeMessage(message));
    }
}