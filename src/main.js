/*
 Watching : 4.4 Cow Vs Butcher 1/11 (Project Setup, Preloader and Boot) - Phaser Game
 https://youtu.be/1o55_seD2Q4?t=1h37m56s
 */

import 'pixi'
import 'p2'
import 'phaser'

import Preloader from './States/Preloader'
import Boot from './States/Boot';
import Menu from './States/Menu';
import Game from './States/Game';


class CowVsButcher extends Phaser.Game {

  constructor(width, height) {

    let calculatedWidth = document.documentElement.clientWidth > 768 ? width : document.documentElement.clientWidth;
    let calculatedHeight = document.documentElement.clientHeight > 1024 ? height : document.documentElement.clientHeight;
    super(calculatedWidth, calculatedHeight, Phaser.AUTO, 'content', null);
    this.state.add("Boot", Boot, true);
    this.state.add("Preloader", Preloader, false);
    this.state.add("Boot", Boot, true);
    this.state.add("Menu", Menu, false);
    this.state.add("Game", Game, false);

  }

}

window.game = new CowVsButcher(1200, 800);
