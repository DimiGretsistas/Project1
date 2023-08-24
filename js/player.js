class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() *-200  +10 );;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.speed = 10;
    this.element = document.createElement("img");

    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}50px`;
    this.element.style.top = `${top}`;

    this.gameScreen.appendChild(this.element);
  }
  move() {
    const playerElement = this.element;

    this.left += this.directionX * this.speed;//Update the position based on the directionY and directionX
    this.top += this.directionY * this.speed;

    if (this.left < 10) {
      //make sure player is not going out of bounds horizontally. if it goes below 10 is set to 10 again.
      this.left = 10;
    }
    if (this.top < 10) {
      //make sure player is not going out of bounds vertically. if it goes below 10 is set to 10 again.
      this.top = 10;
    }
    if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
      // if the player exceeds the width of the gameScreen minus its own width minus 10, it is adjusted to fit within the bounday.
      this.left = this.gameScreen.offsetWidth - this.width - 10;
    }
    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      // if the player exceeds the height of the gameScreen minus its own height minus 10, it is adjusted to fit within the bounday.
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }
    this.updatePosition();
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      console.log("Injured");

      return true;
    } else {
      return false;
    }
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
}
