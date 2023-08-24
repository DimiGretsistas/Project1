window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    
    let game = new Game();

    startButton.addEventListener("click", function() {
        startGame();
    });

    restartButton.addEventListener("click", function () {
        restartGame();
    });

    function startGame () {
        game.start();

        console.log("Game is starting");
    }

    function restartGame () {
        location.reload();
    }

    window.addEventListener("keydown", (event) => {
        console.log(event.key);
        event.preventDefault();
  
        switch (event.key) {
            case "ArrowLeft":
              game.player.directionX = -1;
              break;
            case "ArrowRight":
              game.player.directionX = 1;
              break;
            case "ArrowUp":
              game.player.directionY = -1;
              break;
            case "ArrowDown":
              game.player.directionY = 1;
              break;
          }
        });
    }    