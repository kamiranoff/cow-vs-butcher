/*
 Watching : 4.5 Cow Vs Butcher 2/11 (Main Menu, Blood and Bone Emitters) - Phaser Game
 playlist: https://www.youtube.com/playlist?list=PLRsPe93DnzPOrVx111HHMW0w4tXe0zdLb
 video: https://www.youtube.com/watch?v=QxH9_qL730o&index=6&list=PLRsPe93DnzPOrVx111HHMW0w4tXe0zdLb
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

window.game = new CowVsButcher(1280, 720);
