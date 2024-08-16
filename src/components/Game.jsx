import React, { useEffect, useState } from 'react';
import Phaser from 'phaser';
import Modal from './Modal';
import Background from "../assets/background.jpeg";
import Bottle from "../assets/bear-bottle-md.png";
import Player from "../assets/player-md.png";

const PhaserGame = () => {
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (!gameStarted) return; // Do not start the game until the modal is closed

    const config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 }, // Disable global gravity, as we'll set it per bottle
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };
    
    const game = new Phaser.Game(config);
    
    let player;
    let cursors;
    let bottles;
    let score = 0;
    let scoreText;
    let lives = 3;
    let livesText;
    let gameOverText;
    
    function preload() {
        this.load.image('background', Background);
        this.load.image('player', Player);
        this.load.image('bottle', Bottle);

    }
    
    function create() {
        // this.add.image(config.width / 2, config.height / 2, 'background').setScale(2);
        const background = this.add.image(config.width / 2, config.height / 2, 'background');
  
        // Scale the background image to fit the entire screen
        background.setDisplaySize(config.width, config.height);
    
        // Create the player
        player = this.physics.add.sprite(config.width / 2, config.height - 50, 'player').setScale(0.5);
        player.setCollideWorldBounds(true);
    
        // Create a group for the bottles
        bottles = this.physics.add.group();
    
        // Generate bottles over time
        this.time.addEvent({
            delay: 1000, // Adjust delay to control the frequency of bottle drops
            callback: dropBottle,
            callbackScope: this,
            loop: true
        });
    
        // Set up keyboard input
        cursors = this.input.keyboard.createCursorKeys();
    
        // Set up score text at the top right corner
        scoreText = this.add.text(config.width - 170, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
    
        // Set up lives text just below the score
        livesText = this.add.text(config.width - 170, 56, 'Lives: 3', { fontSize: '32px', fill: '#000' });
    
        // Game Over text (hidden initially)
        gameOverText = this.add.text(config.width / 2, config.height / 2, '', { fontSize: '64px', fill: '#ff0000' });
        gameOverText.setOrigin(0.5);
    }
    
    function update() {
        if (cursors.left.isDown) {
            player.setVelocityX(-160);
        } else if (cursors.right.isDown) {
            player.setVelocityX(160);
        } else {
            player.setVelocityX(0);
        }
    
        // Check if any bottles have gone off the bottom of the screen
        bottles.children.iterate(function (bottle) {
            if (bottle.y > config.height) {
                bottleMissed(bottle);
            }
        });
    }
    
    function dropBottle() {
        // Random X position for the bottle
        let randomX = Phaser.Math.Between(0, config.width);
        let randomSpeed = Phaser.Math.Between(100, 300); // Random speed for falling bottles
    
        // Create the bottle
        let bottle = bottles.create(randomX, 0, 'bottle');
        bottle.setVelocityY(randomSpeed); // Set random falling speed
        bottle.setCollideWorldBounds(false); // Ensure bottle doesn't collide with world bounds
    
        // Set up collision between the player and the bottle
        this.physics.add.overlap(player, bottle, collectBottle, null, this);
    }
    
    function collectBottle(player, bottle) {
        bottle.disableBody(true, true);
    
        // Add to score
        score += 1;  // Update the score by 1 for each bottle collected
        scoreText.setText('Score: ' + score);
    }
    
    function bottleMissed(bottle) {
        bottle.disableBody(true, true); // Remove the bottle
    
        // Reduce lives
        lives -= 1;
        livesText.setText('Lives: ' + lives);
    
        // Check for game over
        if (lives <= 0) {
            gameOver();
        }
    }
    
    function gameOver() {
        // Stop all bottle generation
        this.time.removeAllEvents();
    
        // Display Game Over text
        gameOverText.setText(`Game Over! Your score: ${score}`);
    
        // Stop player movement
        player.setVelocityX(0);
    
        // Optionally, restart the game after a delay
        this.time.delayedCall(3000, () => {
            this.scene.restart();
            score = 0;
            lives = 3;
        }, [], this);
    }
    

    // Clean up on unmount
    return () => {
      game.destroy(true);
    };
  }, [gameStarted]);

  const handleModalClose = () => {
    setGameStarted(true);
  };

  return (
    <div id="phaser-game">
      {!gameStarted && <Modal onClose={handleModalClose} />}
    </div>
  );
};

export default PhaserGame;




























// import React, { useEffect, useRef } from 'react';
// import Phaser from 'phaser';

// const Game = () => {
//   const gameContainer = useRef(null);

//   useEffect(() => {
//     const config = {
//       type: Phaser.AUTO,
//       width: window.innerWidth,
//       height: window.innerHeight,
//       parent: gameContainer.current,
//       physics: {
//         default: 'arcade',
//         arcade: {
//           gravity: { y: 0 },
//           debug: false
//         }
//       },
//       scene: {
//         preload: preload,
//         create: create,
//         update: update
//       }
//     };

//     const game = new Phaser.Game(config);

//     function preload() {
//       this.load.image('background', 'assets/background.png');
//       this.load.image('player', 'assets/player.png');
//       this.load.image('bottle', 'assets/bottle.png');
//     }

//     function create() {
//       this.add.image(config.width / 2, config.height / 2, 'background');

//       player = this.physics.add.sprite(config.width / 2, config.height - 50, 'player').setScale(0.5);
//       player.setCollideWorldBounds(true);

//       bottles = this.physics.add.group();

//       this.time.addEvent({
//         delay: 1000,
//         callback: dropBottle,
//         callbackScope: this,
//         loop: true
//       });

//       cursors = this.input.keyboard.createCursorKeys();

//       scoreText = this.add.text(config.width - 150, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
//       livesText = this.add.text(config.width - 150, 56, 'Lives: 3', { fontSize: '32px', fill: '#000' });
//     }

//     function update() {
//       if (cursors.left.isDown) {
//         player.setVelocityX(-160);
//       } else if (cursors.right.isDown) {
//         player.setVelocityX(160);
//       } else {
//         player.setVelocityX(0);
//       }

//       bottles.children.iterate(function (bottle) {
//         if (bottle.y > config.height) {
//           bottleMissed(bottle);
//         }
//       });
//     }

//     function dropBottle() {
//       let randomX = Phaser.Math.Between(0, config.width);
//       let randomSpeed = Phaser.Math.Between(100, 300);

//       let bottle = bottles.create(randomX, 0, 'bottle');
//       bottle.setVelocityY(randomSpeed);
//       bottle.setCollideWorldBounds(false);
//     }

//     function collectBottle(player, bottle) {
//       bottle.disableBody(true, true);

//       score += 10;
//       scoreText.setText('Score: ' + score);
//     }

//     function bottleMissed(bottle) {
//       bottle.disableBody(true, true);

//       lives -= 1;
//       livesText.setText('Lives: ' + lives);

//       if (lives <= 0) {
//         this.scene.restart();
//         score = 0;
//         lives = 3;
//       }
//     }

//     return () => {
//       game.destroy(true);
//     };
//   }, []);

//   return <div ref={gameContainer} className="w-full h-full"></div>;
// };

// export default Game;
