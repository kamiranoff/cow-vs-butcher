import 'pixi'
import 'p2'
import Phaser from 'phaser'

import Preloader from './states/Preloader'


class Game extends Phaser.Game {

  constructor (width,height) {
    let calculatedWidth = document.documentElement.clientWidth > 768 ? width : document.documentElement.clientWidth;
    let calculatedHeight = document.documentElement.clientHeight > 1024 ? height : document.documentElement.clientHeight;

    super(calculatedWidth, calculatedHeight, Phaser.AUTO, 'content', null);


    this.state.add('Preloader', Preloader, true);


  }
}

window.game = new Game(1200,800);
