const speed = 200;
const enemySpeed = 80
const diffBetweenEnemyAndPlayer = 500;
var left = false;
var right = true;

function enemyDeath (){
    enemy.destroy(true), 2000
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
const cooldown = 750;

let cooldownAttackEnemy = cooldown;
let cooldownAttackPlayer = cooldown - 250;
let counterAttackPlayer = 0;
let deathEnemy = false

const followPlayer = () => {
    if (enemy.health <= 0) {
        score += 5
        deathEnemy = true
        scoreText.setText('SCORE: ' + score);
        return;
    }

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
            if (player.health === 3) {
                player.health -= enemy.attack;
                if(player.health === 2){
                    heart2.destroy(true)
                } else if (player.health === 1){
                    heart1.destroy(true)
                }else if (player.health === 0){
                    heart.destroy(true)
                }
                // hearts.remove(hearts.getChildren()[player.health], true);
            } else if (cooldownAttackEnemy < 0) {
                player.health -= enemy.attack;
                cooldownAttackEnemy = cooldown;
                if(player.health === 2){
                    heart2.destroy(true)
                } else if (player.health === 1){
                    heart1.destroy(true)
                }else if (player.health === 0){
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


function update ()
{
    //////////////////////////////////// HERO MOVEMENT //////////////////////////////////

    if(player.health === 0) {
        return;
    }

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

        if (counterAttackPlayer === 0){
            player.anims.play('attack', true);
            if (enemy.x - player.x <= diffBetweenEnemyAndPlayer) {
                enemy.health -= player.attack;
            }
            ++counterAttackPlayer;
        }

        if (cooldownAttackPlayer < 0) {
            player.anims.play('attack', true);
            if (enemy.x - player.x <= diffBetweenEnemyAndPlayer) {
                enemy.health -= player.attack;
            }
            cooldownAttackPlayer = cooldown - 250;
        } else {
            cooldownAttackPlayer -= 10;
        }
    }
    else
    {
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

    if(heart.anims){
        heart.anims.play('heart', true)
    }
    if(heart1.anims){
        setTimeout(playAnim, 200)
    }
    if(heart2.anims){
        setTimeout(playAnim2, 400)
    }
    boss.anims.play('standB', true)
    
    

    // var scrol_x = player.x - game.config.width/2;    
    // var scrol_y = player.y - game.config.height/2;    

    //  this.cameras.main.scrollX = scrol_x;    ///  scrollX - Х top left point of camera
    //  this.cameras.main.scrollY = scrol_y;    ///  scrollY - Y top left point of camera
}