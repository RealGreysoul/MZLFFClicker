var autoClickerInterval,
  autoClickerCard = document.getElementById("autoClickerCard"),
  autoClickerCardTitle = document.getElementById("autoClickerCardTitle"),
  autoClickerCardPrice = document.getElementById("autoClickerCardPrice"),
  autoClickerSpacer = document.getElementById("autoClickerSpacer"),
  autoClickerLevel = 0,
  autoClickerMax = !1,
  autoClickerLevelData = [
    { level: 1, price: 2500, perSecond: 2 },
    { level: 2, price: 3500, perSecond: 3 },
    { level: 3, price: 4500, perSecond: 4 },
    { level: 4, price: 5500, perSecond: 5 },
    { level: 5, price: 6500, perSecond: 6 },
    { level: 6, price: 7500, perSecond: 7 },
    { level: 7, price: 8500, perSecond: 8 },
    { level: 8, price: 1e4, perSecond: 9 },
    { level: 9, price: 12e3, perSecond: 10 },
    { level: 10, price: 14e3, perSecond: 12 },
    { level: 11, price: 16e3, perSecond: 14 },
  ];
function buyAutoClicker() {
  if (clicks >= autoClickerLevelData[autoClickerLevel].price) {
    (clicks -= autoClickerLevelData[autoClickerLevel].price),
      (clickCount.innerText = `Чикенбеконов: ${clicks}`),
      clearInterval(autoClickerInterval);
    var e = autoClickerLevelData[autoClickerLevel].perSecond / 10;
    if (
      ((autoClickerInterval = setInterval(function () {
        (clicks += e),
          (clicks = Number(clicks.toFixed(2))),
          (clickCount.innerText = `Чикенбеконов: ${clicks}`),
          checkCases(),
          checkStats(),
          checkCases();
      }, 100)),
      ++autoClickerLevel >= autoClickerLevelData.length)
    )
      (autoClickerCard.style.display = "none"),
        (autoClickerSpacer.style.display = "none"),
        (autoClickerMax = !0);
    else {
      var l = autoClickerLevel + 1,
        c = autoClickerLevelData[autoClickerLevel].price;
      (autoClickerCardTitle.innerText = "БОЛЬШАЯ СОСИСКА (Уровень " + l + ")"),
        (autoClickerCardPrice.innerText = "Проебать " + c + " чикенбеконов");
    }
    upgradesBought++,
      playSound("NewUpgrade"),
      console.log(
        `Bought Upgrade: БОЛЬШАЯ СОСИСКА, Level: ${autoClickerLevel}.`
      );
  } else {
    snackbar.MaterialSnackbar.showSnackbar({
      message: "Недостаточно чикенбеконов!",
      timeout: 2e3,
    });
  }
}
function loadAutoClicker() {
  if (0 !== autoClickerLevel) {
    var e = autoClickerLevelData[autoClickerLevel - 1].perSecond / 10;
    if (
      ((autoClickerInterval = setInterval(function () {
        (clicks += e),
          (clicks = Number(clicks.toFixed(2))),
          (clickCount.innerText = `Чикенбеконов: ${clicks}`),
          checkCases(),
          checkStats();
      }, 100)),
      autoClickerLevel >= autoClickerLevelData.length)
    )
      (autoClickerCard.style.display = "none"),
        (autoClickerSpacer.style.display = "none"),
        (autoClickerMax = !0);
    else {
      var l = autoClickerLevel + 1,
        c = autoClickerLevelData[autoClickerLevel].price;
      (autoClickerCardTitle.innerText = "БОЛЬШАЯ СОСИСКА (Уровень " + l + ")"),
        (autoClickerCardPrice.innerText = "Проебать " + c + " чикенбеконов");
    }
  }
}
