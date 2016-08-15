/*
  Watching : 4.4 Cow Vs Butcher 1/11 (Project Setup, Preloader and Boot) - Phaser Game
 https://www.youtube.com/watch?v=1o55_seD2Q4&index=5&list=PLRsPe93DnzPOrVx111HHMW0w4tXe0zdLb?t=31m00s
 */

import 'pixi'
import 'p2'
import Phaser from 'phaser'

import Preloader from './States/Preloader'


class CowVsButcher extends Phaser.Game {

  constructor(width, height) {
    let calculatedWidth = document.documentElement.clientWidth > 768 ? width : document.documentElement.clientWidth;
    let calculatedHeight = document.documentElement.clientHeight > 1024 ? height : document.documentElement.clientHeight;

    super(calculatedWidth, calculatedHeight, Phaser.AUTO, 'content', null);

    this.state.add('Preloader', Preloader, true);

  }
}

window.game = new CowVsButcher(1200, 800);
