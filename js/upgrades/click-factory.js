var clickFactoryInterval,
  clickFactoryCard = document.getElementById("clickFactoryCard"),
  clickFactoryCardTitle = document.getElementById("clickFactoryCardTitle"),
  clickFactoryCardPrice = document.getElementById("clickFactoryCardPrice"),
  clickFactorySpacer = document.getElementById("clickFactorySpacer"),
  clickFactoryLevel = 0,
  clickFactoryMax = !1,
  clickFactoryLevelData = [
    { level: 1, price: 1e3, perTwentySeconds: 500 },
    { level: 2, price: 2e3, perTwentySeconds: 1e3 },
    { level: 3, price: 3e3, perTwentySeconds: 1500 },
    { level: 4, price: 5e3, perTwentySeconds: 2e3 },
    { level: 5, price: 8e3, perTwentySeconds: 2500 },
    { level: 6, price: 12e3, perTwentySeconds: 3e3 },
    { level: 7, price: 16e3, perTwentySeconds: 3500 },
    { level: 8, price: 2e4, perTwentySeconds: 4e3 },
    { level: 9, price: 25e3, perTwentySeconds: 4500 },
    { level: 10, price: 32e3, perTwentySeconds: 5e3 },
  ];
function buyClickFactory() {
  if (clicks >= clickFactoryLevelData[clickFactoryLevel].price) {
    (clicks -= clickFactoryLevelData[clickFactoryLevel].price),
      (clickCount.innerText = `Чикенбеконов: ${clicks}`),
      clearInterval(clickFactoryInterval);
    var e = clickFactoryLevelData[clickFactoryLevel].perTwentySeconds;
    if (
      ((clickFactoryInterval = setInterval(function () {
        (clicks += e),
          (clickCount.innerText = `Чикенбеконов: ${clicks}`),
          checkCases(),
          checkStats(),
          checkCases();
      }, 2e4)),
      ++clickFactoryLevel >= clickFactoryLevelData.length)
    )
      (clickFactoryCard.style.display = "none"),
        (clickFactorySpacer.style.display = "none"),
        (clickFactoryMax = !0);
    else {
      var c = clickFactoryLevel + 1,
        l = clickFactoryLevelData[clickFactoryLevel].price;
      (clickFactoryCardTitle.innerText = "КИШ-МИШ (Уровень " + c + ")"),
        (clickFactoryCardPrice.innerText = "Проебать " + l + " чикенбеконов");
    }
    upgradesBought++,
      playSound("NewUpgrade"),
      console.log(`Bought Upgrade: КИШ-МИШ, Level: ${clickFactoryLevel}.`);
  } else {
    snackbar.MaterialSnackbar.showSnackbar({
      message: "Недостаточно чикенбеконов!",
      timeout: 2e3,
    });
  }
}
function loadClickFactory() {
  if (0 !== clickFactoryLevel) {
    var e = clickFactoryLevelData[clickFactoryLevel - 1].perTwentySeconds;
    if (
      ((clickFactoryInterval = setInterval(function () {
        (clicks += e),
          (clickCount.innerText = `Чикенбеконов: ${clicks}`),
          checkCases(),
          checkStats();
      }, 2e4)),
      clickFactoryLevel >= clickFactoryLevelData.length)
    )
      (clickFactoryCard.style.display = "none"),
        (clickFactorySpacer.style.display = "none"),
        (clickFactoryMax = !0);
    else {
      var c = clickFactoryLevel + 1,
        l = clickFactoryLevelData[clickFactoryLevel].price;
      (clickFactoryCardTitle.innerText = "КИШ-МИШ (Уровень " + c + ")"),
        (clickFactoryCardPrice.innerText = "Проебать " + l + " чикенбеконов");
    }
  }
}
