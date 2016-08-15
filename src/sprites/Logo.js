import Phaser from 'phaser'

export default class Logo extends Phaser.Sprite {

  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset);

    this.game = game;
    this.anchor.setTo(0.5)
  }

  update () {
    this.angle += 1
  }

}