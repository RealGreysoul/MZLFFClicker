const delay = (e) => new Promise((t) => setTimeout(t, e));
function generateNumberBetween(e, t) {
  return Math.floor(Math.random() * (t - e + 1)) + e;
}
