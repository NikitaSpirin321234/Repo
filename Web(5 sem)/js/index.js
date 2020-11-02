import Game from './game.js';
import Control from './control.js';
import {ViewGameField} from './view.js';
import {ViewNextBrick} from './view.js';

//let username = document.getElementById('username');
//username.innerText = "Name";//lastPlayer.name;

const game = new Game();
const view = new ViewGameField(game);
const viewNextBrick = new ViewNextBrick(game);
// window.game = game;
// window.view = view;

view.viewGF(game.getState);
viewNextBrick.viewB();

const control = new Control(game, view, viewNextBrick);

//console.log(game);



