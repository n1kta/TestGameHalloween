const speed = 200;
const enemySpeed = 80
const diffBetweenEnemyAndPlayer = 500;
const diffBetweenEnemyAndPlayerByPoints = 200
var left = false;
var right = true;
let gameOver = false

function bossOpacity(){
    boss.setAlpha(1)
}

function enemyDeath (){
    enemy.setAlpha(0)
}

function enemyDeath2 (){
    enemy2.setAlpha(0)
}

function enemyDeath3 (){
    enemy3.setAlpha(0)
}

function enemyDeath4 (){
    enemy4.setAlpha(0)
}

function hardEnemyDeath (){
    boss.setAlpha(0)
}

function playAnim (anim) {
    if(heart1.anims){
        heart1.anims.play('heart', true)
    }
}

function playAnim2 (anim) {
    if(heart2.anims){
        heart2.anims.play('heart', true)
    }
}
const cooldown = 450;

let cooldownAttackEnemy = cooldown;
let cooldownAttackPlayer = cooldown - 250;
let counterAttackPlayer = 0;
let deathEnemy = false

let cooldownAttackEnemy2 = cooldown;
let deathEnemy2 = false

let cooldownAttackEnemy3 = cooldown;
let deathEnemy3 = false

let cooldownAttackEnemy4 = cooldown;
let deathEnemy4 = false

let cooldownAttackEnemyHard = cooldown + 100;
let counterAttackPlayerHard = 0;
let deathEnemyHard = false

const followPlayer = () => {
    if (enemy.health <= 0) {
        score += 10
        deathEnemy = true
        scoreText.setText('SCORE: ' + score);
        return;
    }

    if (Math.sqrt(Math.pow(enemy.x - player.x, 2) + Math.pow(enemy.y - player.y, 2)) <= diffBetweenEnemyAndPlayer) {
        if (Math.abs(enemy.x - player.x) >= 50 || Math.abs(enemy.y - player.y) >= 50) {
            let angle_radians = Math.atan2(enemy.y - player.y, enemy.x - player.x - 50);
            let leftMovement = enemy.x - player.x - 50;

            if (leftMovement > 0) {
                enemy.anims.play('leftE', true);
            } else {
                enemy.anims.play('rightE', true);
            }

            enemy.y -= Math.sin(angle_radians) * (enemySpeed / 100);
            enemy.x -= Math.cos(angle_radians) * (enemySpeed / 100);
        } else {
            if (enemy.x - player.x - 20 > 0) {
                enemy.anims.play('leftPunchE', true);
            }
            else {
                enemy.anims.play('rightPunchE', true);
            }
            // Attack
            if (player.health === 3) {
                player.health -= enemy.attack;
                if (player.health === 2) {
                    heart2.destroy(true)
                } else if (player.health === 1) {
                    heart1.destroy(true)
                } else if (player.health === 0) {
                    heart.destroy(true)
                }
                // hearts.remove(hearts.getChildren()[player.health], true);
            } else if (cooldownAttackEnemy < 0) {
                player.health -= enemy.attack;
                cooldownAttackEnemy = cooldown;
                if (player.health === 2) {
                    heart2.destroy(true)
                } else if (player.health === 1) {
                    heart1.destroy(true)
                } else if (player.health === 0) {
                    heart.destroy(true)
                }
            } else {
                cooldownAttackEnemy -= 10;
            }

        }
    } else {
        enemy.anims.play('rightStandE', true);
    }
}

const followPlayer2 = () => {
    if (enemy2.health <= 0) {
        score += 10
        deathEnemy2 = true
        scoreText.setText('SCORE: ' + score);
        return;
    }

    if (Math.sqrt(Math.pow(enemy2.x - player.x, 2) + Math.pow(enemy2.y - player.y, 2)) <= diffBetweenEnemyAndPlayer) {
        if (Math.abs(enemy2.x - player.x) >= 50 || Math.abs(enemy2.y - player.y) >= 50) {
            let angle_radians = Math.atan2(enemy2.y - player.y, enemy2.x - player.x - 50);
            let leftMovement = enemy2.x - player.x - 50;

            if (leftMovement > 0) {
                enemy2.anims.play('leftE', true);
            } else {
                enemy2.anims.play('rightE', true);
            }

            enemy2.y -= Math.sin(angle_radians) * (enemySpeed / 100);
            enemy2.x -= Math.cos(angle_radians) * (enemySpeed / 100);
        } else if (Math.sqrt(Math.pow(enemy2.x - player.x, 2) + Math.pow(enemy2.y - player.y, 2)) <= diffBetweenEnemyAndPlayerByPoints) {
            if (enemy2.x - player.x - 20 > 0) {
                enemy2.anims.play('leftPunchE', true);
            }
            else {
                enemy2.anims.play('rightPunchE', true);
            }
            // Attack
            if (player.health === 3) {
                player.health -= enemy2.attack;
                if (player.health === 2) {
                    heart2.destroy(true)
                } else if (player.health === 1) {
                    heart1.destroy(true)
                } else if (player.health === 0) {
                    heart.destroy(true)
                }
                // hearts.remove(hearts.getChildren()[player.health], true);
            } else if (cooldownAttackEnemy2 < 0) {
                player.health -= enemy2.attack;
                cooldownAttackEnemy2 = cooldown;
                if (player.health === 2) {
                    heart2.destroy(true)
                } else if (player.health === 1) {
                    heart1.destroy(true)
                } else if (player.health === 0) {
                    heart.destroy(true)
                }
            } else {
                cooldownAttackEnemy2 -= 10;
            }

        }
    } else {
        enemy2.anims.play('rightStandE', true);
    }
}

const followPlayer3 = () => {
    if (enemy3.health <= 0) {
        score += 10
        deathEnemy3 = true
        scoreText.setText('SCORE: ' + score);
        return;
    }

    if (Math.sqrt(Math.pow(enemy3.x - player.x, 2) + Math.pow(enemy3.y - player.y, 2)) <= diffBetweenEnemyAndPlayer) {
        if (Math.abs(enemy3.x - player.x) >= 50 || Math.abs(enemy3.y - player.y) >= 50) {
            let angle_radians = Math.atan2(enemy3.y - player.y, enemy3.x - player.x - 50);
            let leftMovement = enemy3.x - player.x - 50;

            if (leftMovement > 0) {
                enemy3.anims.play('leftE', true);
            } else {
                enemy3.anims.play('rightE', true);
            }

            enemy3.y -= Math.sin(angle_radians) * (enemySpeed / 100);
            enemy3.x -= Math.cos(angle_radians) * (enemySpeed / 100);
        } else if (Math.sqrt(Math.pow(enemy3.x - player.x, 2) + Math.pow(enemy3.y - player.y, 2)) <= diffBetweenEnemyAndPlayerByPoints) {
            if (enemy3.x - player.x - 20 > 0) {
                enemy3.anims.play('leftPunchE', true);
            }
            else {
                enemy3.anims.play('rightPunchE', true);
            }
            // Attack
            if (player.health === 3) {
                player.health -= enemy3.attack;
                if (player.health === 2) {
                    heart2.destroy(true)
                } else if (player.health === 1) {
                    heart1.destroy(true)
                } else if (player.health === 0) {
                    heart.destroy(true)
                }
                // hearts.remove(hearts.getChildren()[player.health], true);
            } else if (cooldownAttackEnemy3 < 0) {
                player.health -= enemy3.attack;
                cooldownAttackEnemy3 = cooldown;
                if (player.health === 2) {
                    heart2.destroy(true)
                } else if (player.health === 1) {
                    heart1.destroy(true)
                } else if (player.health === 0) {
                    heart.destroy(true)
                }
            } else {
                cooldownAttackEnemy3 -= 10;
            }

        }
    } else {
        enemy3.anims.play('rightStandE', true);
    }
}

const followPlayer4 = () => {
    if (enemy4.health <= 0) {
        score += 10
        deathEnemy4 = true
        scoreText.setText('SCORE: ' + score);
        return;
    }

    if (Math.sqrt(Math.pow(enemy4.x - player.x, 2) + Math.pow(enemy4.y - player.y, 2)) <= diffBetweenEnemyAndPlayer) {
        if (Math.abs(enemy4.x - player.x) >= 50 || Math.abs(enemy4.y - player.y) >= 50) {
            let angle_radians = Math.atan2(enemy4.y - player.y, enemy4.x - player.x - 50);
            let leftMovement = enemy4.x - player.x - 50;

            if (leftMovement > 0) {
                enemy4.anims.play('leftE', true);
            } else {
                enemy4.anims.play('rightE', true);
            }

            enemy4.y -= Math.sin(angle_radians) * (enemySpeed / 100);
            enemy4.x -= Math.cos(angle_radians) * (enemySpeed / 100);
        } else if (Math.sqrt(Math.pow(enemy4.x - player.x, 2) + Math.pow(enemy4.y - player.y, 2)) <= diffBetweenEnemyAndPlayerByPoints)  {
            if (enemy4.x - player.x - 20 > 0) {
                enemy4.anims.play('leftPunchE', true);
            }
            else {
                enemy4.anims.play('rightPunchE', true);
            }
            // Attack
            if (player.health === 3) {
                player.health -= boss.attack;
                if (player.health === 2) {
                    heart2.destroy(true)
                } else if (player.health === 1) {
                    heart1.destroy(true)
                } else if (player.health === 0) {
                    heart.destroy(true)
                }
                // hearts.remove(hearts.getChildren()[player.health], true);
            } else if (cooldownAttackEnemy4 < 0) {
                player.health -= boss.attack;
                cooldownAttackEnemy4 = cooldown;
                if (player.health === 2) {
                    heart2.destroy(true)
                } else if (player.health === 1) {
                    heart1.destroy(true)
                } else if (player.health === 0) {
                    heart.destroy(true)
                }
            } else {
                cooldownAttackEnemy4 -= 10;
            }

        }
    } else {
        enemy4.anims.play('rightStandE', true);
    }
}

const followPlayerHard = () => {
    if (boss.health <= 0) {
        score += 60
        deathEnemyHard = true
        scoreText.setText('SCORE: ' + score);
        return;
    }

    if (Math.sqrt(Math.pow(boss.x - player.x, 2) + Math.pow(boss.y - player.y, 2)) <= diffBetweenEnemyAndPlayer) {
        if (Math.abs(boss.x - player.x) >= 50 || Math.abs(boss.y - player.y) >= 50) {
            let angle_radians = Math.atan2(boss.y - player.y, boss.x - player.x - 50);
            let leftMovement = boss.x - player.x - 50;

            if (leftMovement > 0) {
                boss.anims.play('walkBossL', true);
            } else {
                boss.anims.play('walkBossR', true);
            }

            boss.y -= Math.sin(angle_radians) * (enemySpeed / 100);
            boss.x -= Math.cos(angle_radians) * (enemySpeed / 100);
        } else if (Math.sqrt(Math.pow(boss.x - player.x, 2) + Math.pow(boss.y - player.y, 2)) <= diffBetweenEnemyAndPlayerByPoints + 20) {
            if (boss.x - player.x - 20 > 0) {
                boss.anims.play('attackBossL', true);
            }
            else {
                boss.anims.play('attackBossR', true);
            }
            // Attack
            if (player.health === 3) {
                player.health -= boss.attack;
                if (player.health === 2) {
                    heart2.destroy(true)
                } else if (player.health === 1) {
                    heart1.destroy(true)
                } else if (player.health === 0) {
                    heart.destroy(true)
                }
                // hearts.remove(hearts.getChildren()[player.health], true);
            } else if (cooldownAttackEnemyHard < 0) {
                player.health -= boss.attack;
                cooldownAttackEnemyHard = cooldown;
                if (player.health === 2) {
                    heart2.destroy(true)
                } else if (player.health === 1) {
                    heart1.destroy(true)
                } else if (player.health === 0) {
                    heart.destroy(true)
                }
            } else {
                cooldownAttackEnemyHard -= 10;
            }

        }
    } else {
        boss.anims.play('standB', true);
    }
}


function update ()
{
    //////////////////////////////////// HERO MOVEMENT //////////////////////////////////
    if(player.health === 0) {
        game_over = this.physics.add.sprite(window.innerWidth/2, window.innerHeight/2, 'game_over').setScrollFactor(0);
        setTimeout(() => {
            location.reload();
        }, 1000);
        gameOver = true
    }
    if(score >= 100) {
        game_over = this.physics.add.sprite(window.innerHeight/2, window.innerHeight/2, 'game_over2').setScrollFactor(0)
        setTimeout(() => {
            location.reload();
        }, 1000);
        gameOver = true
    }

    if (cursors.left.isDown && !gameOver)
    {
        player.setVelocityX(-speed);
        player.setVelocityY(0);
        player.anims.play('left', true);
        right = false;
        left = true;
    }
    else if (cursors.right.isDown && !gameOver)
    {
        player.setVelocityX(speed);
        player.setVelocityY(0);
        player.anims.play('right', true);
        right = true;
        left = false;
    }
    else if (cursors.down.isDown && !gameOver)
    {
        player.setVelocityY(speed);
        player.setVelocityX(0);
        player.anims.play('down', true);
    }
    else if (cursors.up.isDown && !gameOver)
    {
        player.setVelocityY(-speed);
        player.setVelocityX(0);
        player.anims.play('up', true);
    }
    else if (cursors.space.isDown && !gameOver)
    {   
        player.setVelocityX(0);
        player.setVelocityY(0);

        if (counterAttackPlayer === 0) {
            if (right) {
                player.anims.play('attackRight', true);
            } else {
                player.anims.play('attackLeft', true);
            }
            if (Math.sqrt(Math.pow(enemy.x - player.x, 2) + Math.pow(enemy.y - player.y, 2)) <= diffBetweenEnemyAndPlayerByPoints) {
                enemy.health -= player.attack;
            }
            ++counterAttackPlayer;
        }

        if (cooldownAttackPlayer < 0) {
            if (right) {
                player.anims.play('attackRight', true);
            } else {
                player.anims.play('attackLeft', true);
            }
            if (Math.sqrt(Math.pow(enemy.x - player.x, 2) + Math.pow(enemy.y - player.y, 2)) <= diffBetweenEnemyAndPlayerByPoints) {
                enemy.health -= player.attack;
                
            }
            cooldownAttackPlayer = cooldown - 250;
        } else {
            cooldownAttackPlayer -= 10;
        }

        if (counterAttackPlayer === 0){
            if (right) {
                player.anims.play('attackRight', true);
            } else {
                player.anims.play('attackLeft', true);
            }
            if (Math.sqrt(Math.pow(enemy2.x - player.x, 2) + Math.pow(enemy2.y - player.y, 2)) <= diffBetweenEnemyAndPlayerByPoints) {
                enemy2.health -= player.attack;
            }
            ++counterAttackPlayer;
        }

        if (cooldownAttackPlayer < 0) {
            if (right) {
                player.anims.play('attackRight', true);
            } else {
                player.anims.play('attackLeft', true);
            }
            if (Math.sqrt(Math.pow(enemy2.x - player.x, 2) + Math.pow(enemy2.y - player.y, 2)) <= diffBetweenEnemyAndPlayerByPoints) {
                enemy2.health -= player.attack;
            }
            cooldownAttackPlayer = cooldown - 250;
        } else {
            cooldownAttackPlayer -= 10;
        }

        if (counterAttackPlayer === 0){
            if (right) {
                player.anims.play('attackRight', true);
            } else {
                player.anims.play('attackLeft', true);
            }
            if (Math.sqrt(Math.pow(enemy3.x - player.x, 2) + Math.pow(enemy3.y - player.y, 2)) <= diffBetweenEnemyAndPlayerByPoints) {
                enemy3.health -= player.attack;
            }
            ++counterAttackPlayer;
        }

        if (cooldownAttackPlayer < 0) {
            if (right) {
                player.anims.play('attackRight', true);
            } else {
                player.anims.play('attackLeft', true);
            }
            if (Math.sqrt(Math.pow(enemy3.x - player.x, 2) + Math.pow(enemy3.y - player.y, 2)) <= diffBetweenEnemyAndPlayerByPoints) {
                enemy3.health -= player.attack;
            }
            cooldownAttackPlayer = cooldown - 250;
        } else {
            cooldownAttackPlayer -= 10;
        }

        if (counterAttackPlayer === 0) {
            if (right) {
                player.anims.play('attackRight', true);
            } else {
                player.anims.play('attackLeft', true);
            }
            if (Math.sqrt(Math.pow(enemy4.x - player.x, 2) + Math.pow(enemy4.y - player.y, 2)) <= diffBetweenEnemyAndPlayerByPoints) {
                enemy4.health -= player.attack;
            }
            ++counterAttackPlayerHard;
        }

        if (cooldownAttackPlayer < 0) {
            if (right) {
                player.anims.play('attackRight', true);
            } else {
                player.anims.play('attackLeft', true);
            }
            if (Math.sqrt(Math.pow(enemy4.x - player.x, 2) + Math.pow(enemy4.y - player.y, 2)) <= diffBetweenEnemyAndPlayerByPoints) {
                enemy4.health -= player.attack;
                console.log(boss.health)
            }
            cooldownAttackPlayer = cooldown;
        } else {
            cooldownAttackPlayer -= 10;
        }


        // Hard

        if (counterAttackPlayer === 0 && !deathEnemyHard) {
            if (right) {
                player.anims.play('attackRight', true);
            } else {
                player.anims.play('attackLeft', true);
            }
            if (Math.sqrt(Math.pow(boss.x - player.x, 2) + Math.pow(boss.y - player.y, 2)) <= diffBetweenEnemyAndPlayerByPoints) {
                boss.health -= player.attack;
            }
            ++counterAttackPlayerHard;
        }

        if (cooldownAttackPlayer < 0 && !deathEnemyHard) {
            if (right) {
                player.anims.play('attackRight', true);
            } else {
                player.anims.play('attackLeft', true);
            }
            if (Math.sqrt(Math.pow(boss.x - player.x, 2) + Math.pow(boss.y - player.y, 2)) <= diffBetweenEnemyAndPlayerByPoints) {
                boss.health -= player.attack;
                boss.setAlpha(0.5)
                setInterval(bossOpacity, 800)
            }
            cooldownAttackPlayer = cooldown;
        } else {
            cooldownAttackPlayer -= 10;
        }
    }
    else {
        player.setVelocityX(0);
        player.setVelocityY(0);

        player.anims.play('turn', true)
    }

    //////////////////////////////////////////////////////////////////////////////////////
    if (deathEnemy != true)
    {
        followPlayer();
    }else {
        if(enemy.anims){
            enemy.anims.play('enemyDeath', true);
            setTimeout(enemyDeath, 1000)
        }else {
            return
        }
    }

    if (deathEnemy2 != true)
    {
        followPlayer2();
    }else {
        if(enemy2.anims){
            enemy2.anims.play('enemyDeath', true);
            setTimeout(enemyDeath2, 1000)
        }else {
            return
        }
    }

    if (deathEnemy3 != true)
    {
        followPlayer3();
    }else {
        if(enemy3.anims){
            enemy3.anims.play('enemyDeath', true);
            setTimeout(enemyDeath3, 1000)
        }else {
            return
        }
    }

    if (deathEnemyHard != true) {
        followPlayerHard();
    } else {
        if (boss.anims) {
            boss.anims.play('deathB', true);
        } else {
            return
        }
    }

    if (deathEnemy4 != true) {
        followPlayer4();
    } else {
        if (enemy4.anims) {
            enemy4.anims.play('enemyDeath', true);
            setTimeout(enemyDeath4, 1000)
        } else {
            return
        }
    }

    if(heart.anims){
        heart.anims.play('heart', true)
    }
    if(heart1.anims){
        setTimeout(playAnim, 200)
    }
    if(heart2.anims){
        setTimeout(playAnim2, 400)
    }    
    
    

    // var scrol_x = player.x - game.config.width/2;    
    // var scrol_y = player.y - game.config.height/2;    

    //  this.cameras.main.scrollX = scrol_x;    ///  scrollX - Х top left point of camera
    //  this.cameras.main.scrollY = scrol_y;    ///  scrollY - Y top left point of camera
}