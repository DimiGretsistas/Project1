class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = 500;
    this.top = Math.floor(Math.random() *700 -10);;
    this.width = 200;
    this.height = 80;
    this.element = document.createElement("img");
    this.element.src = "./images/shark.gif";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move() {
    this.left += -4;
    this.updatePosition();
  }
}
