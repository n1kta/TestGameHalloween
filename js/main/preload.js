function preload ()
{

    /////////////////////// SPRITESHEETS /////////////////////

    this.load.spritesheet('dude', 'assets/player/walking.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('dudeStand', 'assets/player/animation.png', {frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('enemy', 'assets/player/walking.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('enemyStand', 'assets/player/animation.png', {frameWidth: 100, frameHeight: 100});

    ////////////////////// IMAGES ////////////////////////

    this.load.image('grass', 'assets/map/background.png');
    this.load.image('orange', 'assets/map/background-1.png');
}