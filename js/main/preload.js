function preload ()
{

    /////////////////////// SPRITESHEETS /////////////////////

    this.load.spritesheet('dude', 'assets/player/walking_hero.png', { frameWidth: 45, frameHeight: 80 });

    this.load.spritesheet('heart', 'assets/player/heart.png', { frameWidth: 32, frameHeight: 40 });

    this.load.spritesheet('dude2', 'assets/player/walking_hero_up_down.png', { frameWidth: 45, frameHeight: 80 });
    this.load.spritesheet('dude_punch', 'assets/player/hero_punch.png', { frameWidth: 75, frameHeight: 80 });
    this.load.spritesheet('dudeStand', 'assets/player/hero_stand.png', {frameWidth: 45, frameHeight: 80});
    // this.load.spritesheet('attack', 'assets/player/attack.png', {frameWidth: 100, frameHeight: 100});

    this.load.spritesheet('walkingEnemy', 'assets/player/walking_enemy.png', { frameWidth: 70, frameHeight: 80 });
    this.load.spritesheet('enemyStand', 'assets/player/enemy_stand.png', {frameWidth: 50, frameHeight: 80});
    this.load.spritesheet('enemyPunch', 'assets/player/enemy_punch.png', {frameWidth: 97, frameHeight: 80});
    this.load.spritesheet('enemyDeath', 'assets/player/enemy_death.png', { frameWidth: 75, frameHeight: 80 });


    this.load.spritesheet('boss', 'assets/player/boss-animation.png', { frameWidth: 255, frameHeight: 250 });

    ////////////////////// IMAGES ////////////////////////

    this.load.image('grass', 'assets/map/background.png');
    this.load.image('orange', 'assets/map/background-1.png');
    this.load.image('game_over', 'assets/game_over1.png');
}