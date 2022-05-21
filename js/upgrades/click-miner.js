var clickMinerInterval,
  clickMinerCard = document.getElementById("clickMinerCard"),
  clickMinerCardTitle = document.getElementById("clickMinerCardTitle"),
  clickMinerCardPrice = document.getElementById("clickMinerCardPrice"),
  clickMinerSpacer = document.getElementById("clickMinerSpacer"),
  clickMinerLevel = 0,
  clickMinerMax = !1,
  clickMinerLevelData = [
    { level: 1, price: 1e3, high: 100, low: 50 },
    { level: 2, price: 1500, high: 150, low: 100 },
    { level: 3, price: 2e3, high: 200, low: 150 },
    { level: 4, price: 3e3, high: 250, low: 200 },
    { level: 5, price: 5e3, high: 500, low: 250 },
    { level: 6, price: 7e3, high: 750, low: 500 },
    { level: 7, price: 9e3, high: 1e3, low: 750 },
    { level: 8, price: 12e3, high: 1500, low: 1e3 },
    { level: 9, price: 15e3, high: 2500, low: 1500 },
  ];
function buyClickMiner() {
  if (clicks >= clickMinerLevelData[clickMinerLevel].price) {
    if (
      ((clicks -= clickMinerLevelData[clickMinerLevel].price),
      (clickCount.innerText = `Чикенбеконов: ${clicks}`),
      clearInterval(clickMinerInterval),
      (clickMinerInterval = setInterval(function () {
        var e = generateNumberBetween(
          clickMinerLevelData[clickMinerLevel - 1].low,
          clickMinerLevelData[clickMinerLevel - 1].high
        );
        (clicks += e),
          (clickCount.innerText = `Чикенбеконов: ${clicks}`),
          checkCases(),
          checkStats();
      }, 1e4)),
      ++clickMinerLevel >= clickMinerLevelData.length)
    )
      (clickMinerCard.style.display = "none"),
        (clickMinerSpacer.style.display = "none"),
        (clickMinerMax = !0);
    else {
      var e = clickMinerLevel + 1,
        i = clickMinerLevelData[clickMinerLevel].price;
      (clickMinerCardTitle.innerText = "БАТОН (Уровень " + e + ")"),
        (clickMinerCardPrice.innerText = "Проебать " + i + " чикенбеконов");
    }
    upgradesBought++,
      playSound("NewUpgrade"),
      console.log(`Bought Upgrade: БАТОН, Level: ${clickMinerLevel}.`);
  } else {
    snackbar.MaterialSnackbar.showSnackbar({
      message: "Недостаточно чикенбеконов!",
      timeout: 2e3,
    });
  }
}
function loadClickMiner() {
  if (0 !== clickMinerLevel) {
    var e = clickMinerLevel - 1;
    if (
      ((clickMinerInterval = setInterval(function () {
        var i = generateNumberBetween(
          clickMinerLevelData[e].low,
          clickMinerLevelData[e].high
        );
        (clicks += i),
          (clickCount.innerText = `Чикенбеконов: ${clicks}`),
          checkCases(),
          checkStats(),
          checkCases();
      }, 1e4)),
      clickMinerLevel >= clickMinerLevelData.length)
    )
      (clickMinerCard.style.display = "none"),
        (clickMinerSpacer.style.display = "none"),
        (clickMinerMax = !0);
    else {
      var i = clickMinerLevel + 1,
        c = clickMinerLevelData[clickMinerLevel].price;
      (clickMinerCardTitle.innerText = "БАТОН (Уровень " + i + ")"),
        (clickMinerCardPrice.innerText = "Проебать " + c + " чикенбеконов");
    }
  }
}
