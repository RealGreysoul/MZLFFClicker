var allMaxed = document.getElementById("allMaxed");
function buy(a) {
  switch (a) {
    case "perClick":
      buyPerClick();
      break;
    case "clickBomb":
      buyClickBomb();
      break;
    case "clickFactory":
      buyClickFactory();
      break;
    case "clickMiner":
      buyClickMiner();
      break;
    case "autoClicker":
      buyAutoClicker();
      break;
    case "clickPortal":
      buyClickPortal();
      break;
    default:
      var c = { message: `Выебон "${a}" не найден!`, timeout: 2e3 };
      snackbar.MaterialSnackbar.showSnackbar(c);
  }
  checkAllMax();
}
function checkAllMax() {
  allMax() &&
    (console.log("All upgrades maxed!"), (allMaxed.style.display = "block"));
}
function allMax() {
  return (
    perClickMax &&
    clickBombMax &&
    clickFactoryMax &&
    clickMinerMax &&
    autoClickerMax &&
    clickPortalMax
  );
}
