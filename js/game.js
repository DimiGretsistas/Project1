class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("game-end");
    this.displayScore = document.querySelector("#score");
    this.displayLives = document.querySelector("#lives");
    this.displayTotal = document.querySelector(".results-wrapper");
    this.gameAudio = new Audio("../sounds/scuba.mp3");
    this.player = new Player(
      this.gameScreen,
      15,
      350,
      200,
      150,
      "../images/diver.gif"
    );
    this.player.speed = 5;
    this.height = 700;
    this.width = 700;
    this.obstacles = [];
    this.score = 0;
    this.lives = 5;
    this.gameIsOver = false;
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.displayTotal.style.display = "block";
    this.gameAudio.play();
    this.gameLoop();
  }

  gameLoop() {
    if (this.gameIsOver) {
      return;
    }

    this.update();

    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    this.player.move();

    this.displayScore.innerHTML = this.score;
    this.displayLives.innerHTML = this.lives;

    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();
      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.lives--;
        i--;
      }

      if (obstacle.left === 0) {
        this.score++;
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
      }
    }
    if (this.lives === 0) {
      this.endGame();
    } else if (this.score === 10) {
      this.endGame();
    }

    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }

  endGame() {
    this.player.element.remove();
    this.obstacles.forEach(function (obstacle) {
      obstacle.element.remove();
    });

    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.endScreen.style.display = "block";
    this.displayTotal.style.display = "block";
    this.gameAudio.pause();
  }
}
