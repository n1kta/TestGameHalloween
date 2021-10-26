const speed = 200;
const enemySpeed = 80
const diffBetweenEnemyAndPlayer = 500;
var left = false;
var right = true;

function playAnim (anim) {
    heart1.anims.play('heart', true)
}

function playAnim2 (anim) {
    heart2.anims.play('heart', true)
}

const followPlayer = () => {
    

    if (enemy.x - player.x <= diffBetweenEnemyAndPlayer) {
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
            if(enemy.x - player.x - 20 > 0) {
                enemy.anims.play('leftPunchE', true);
            }
            else{
                enemy.anims.play('rightPunchE', true);
            }
            // Attack
        }
    } else {
        enemy.anims.play('rightStandE', true);
    }
}


function update ()
{
    //////////////////////////////////// HERO MOVEMENT //////////////////////////////////

    if (cursors.left.isDown)
    {
        player.setVelocityX(-speed);
        player.setVelocityY(0);
        player.anims.play('left', true);
        right = false;
        left = true;
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(speed);
        player.setVelocityY(0);
        player.anims.play('right', true);
        right = true;
        left = false;
    }
    else if (cursors.down.isDown)
    {
        player.setVelocityY(speed);
        player.setVelocityX(0);
        player.anims.play('down', true);
    }
    else if (cursors.up.isDown)
    {
        player.setVelocityY(-speed);
        player.setVelocityX(0);
        player.anims.play('up', true);
    }
    else if (cursors.space.isDown)
    {
        if (right){
            player.anims.play('attackRight', true);
        } else {
            player.anims.play('attackLeft', true);
        }
        
        player.setVelocityX(0);
        player.setVelocityY(0);

    }
    else
    {
        player.setVelocityX(0);
        player.setVelocityY(0);

        player.anims.play('turn', true)
    }

    //////////////////////////////////////////////////////////////////////////////////////

    followPlayer();

    heart.anims.play('heart', true)
    boss.anims.play('standB', true)
    setTimeout(playAnim, 200)
    setTimeout(playAnim2, 400)

    // var scrol_x = player.x - game.config.width/2;    
    // var scrol_y = player.y - game.config.height/2;    

    //  this.cameras.main.scrollX = scrol_x;    ///  scrollX - Х top left point of camera
    //  this.cameras.main.scrollY = scrol_y;    ///  scrollY - Y top left point of camera
}