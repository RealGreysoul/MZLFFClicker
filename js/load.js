var snackbar = document.getElementById("snackbar");
window.onload = function () {
  console.log("Loading..."),
    loadGame(),
    setInterval(function () {
      saveGame();
    }, 6e4),
    console.log("Ready!");
};
