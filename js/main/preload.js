function preload ()
{

    /////////////////////// SPRITESHEETS /////////////////////

    this.load.spritesheet('dude', 'assets/player/walking1.png', { frameWidth: 70, frameHeight: 80 });
    this.load.spritesheet('dude2', 'assets/player/walking.png', { frameWidth: 35, frameHeight: 80 });
    this.load.spritesheet('dudeStand', 'assets/player/animation.png', {frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('attack', 'assets/player/attack.png', {frameWidth: 100, frameHeight: 100});

    ////////////////////// IMAGES ////////////////////////

    this.load.image('grass', 'assets/map/background.png');
    this.load.image('orange', 'assets/map/background-1.png');
}