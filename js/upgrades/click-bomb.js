var clickBombInterval,
  clickBombCard = document.getElementById("clickBombCard"),
  clickBombCardTitle = document.getElementById("clickBombCardTitle"),
  clickBombCardPrice = document.getElementById("clickBombCardPrice"),
  clickBombSpacer = document.getElementById("clickBombSpacer"),
  clickBombLevel = 0,
  clickBombMax = !1,
  clickBombLevelData = [
    { level: 1, price: 100, perFiveSeconds: 15 },
    { level: 2, price: 250, perFiveSeconds: 25 },
    { level: 3, price: 750, perFiveSeconds: 35 },
    { level: 4, price: 1500, perFiveSeconds: 45 },
    { level: 5, price: 2500, perFiveSeconds: 55 },
    { level: 6, price: 5e3, perFiveSeconds: 55 },
    { level: 7, price: 7500, perFiveSeconds: 65 },
    { level: 8, price: 1e4, perFiveSeconds: 75 },
    { level: 9, price: 15e3, perFiveSeconds: 90 },
    { level: 10, price: 2e4, perFiveSeconds: 100 },
  ];
function buyClickBomb() {
  if (clicks >= clickBombLevelData[clickBombLevel].price) {
    (clicks -= clickBombLevelData[clickBombLevel].price),
      (clickCount.innerText = `Чикенбеконов: ${clicks}`),
      clearInterval(clickBombInterval);
    var e = clickBombLevelData[clickBombLevel].perFiveSeconds;
    if (
      ((clickBombInterval = setInterval(function () {
        (clicks += e),
          (clickCount.innerText = `Чикенбеконов: ${clicks}`),
          checkCases(),
          checkStats();
      }, 5e3)),
      ++clickBombLevel >= clickBombLevelData.length)
    )
      (clickBombCard.style.display = "none"),
        (clickBombSpacer.style.display = "none"),
        (clickBombMax = !0);
    else {
      var c = clickBombLevel + 1,
        l = clickBombLevelData[clickBombLevel].price;
      (clickBombCardTitle.innerText = "НЕСКВИК (Уровень " + c + ")"),
        (clickBombCardPrice.innerText = "Проебать " + l + " чикенбеконов");
    }
    upgradesBought++,
      playSound("NewUpgrade"),
      console.log(`Bought Upgrade: НЕСКВИК, Level: ${clickBombLevel}.`);
  } else {
    snackbar.MaterialSnackbar.showSnackbar({
      message: "Недостаточно чикенбеконов!",
      timeout: 2e3,
    });
  }
}
function loadClickBomb() {
  if (0 !== clickBombLevel) {
    var e = clickBombLevelData[clickBombLevel - 1].perFiveSeconds;
    if (
      ((clickBombInterval = setInterval(function () {
        (clicks += e),
          (clickCount.innerText = `Чикенбеконов: ${clicks}`),
          checkCases(),
          checkStats(),
          checkCases();
      }, 5e3)),
      clickBombLevel >= clickBombLevelData.length)
    )
      (clickBombCard.style.display = "none"),
        (clickBombSpacer.style.display = "none"),
        (clickBombMax = !0);
    else {
      var c = clickBombLevel + 1,
        l = clickBombLevelData[clickBombLevel].price;
      (clickBombCardTitle.innerText = "НЕСКВИК (Уровень " + c + ")"),
        (clickBombCardPrice.innerText = "Проебать " + l + " чикенбеконов");
    }
  }
}
