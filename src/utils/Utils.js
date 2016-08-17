class Utils {

  static centerGameObjects(objects) {
    objects.forEach(function(object) {
      object.anchor.setTo(0.5);
    })
  };

  static setResponsiveWidth(sprite, percent, parent) {
    let percentWidth = (sprite.texture.width - (parent.width / (100 / percent))) * 100 / sprite.texture.width;
    sprite.width = parent.width / (100 / percent);
    sprite.height = sprite.texture.height - (sprite.texture.height * percentWidth / 100);
  }

  static getRandomFloatingPoint(from, to) {
    return Math.random() * (to - from) + from;
  }

}

export default Utils;