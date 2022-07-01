function playSound(e) {
  if (
    innerWidth >= 840 ||
    document.getElementById("mobileSoundsCheckbox").checked
  )
    switch (e) {
      case "Default":
        new Audio(
          `https://assets.ctfassets.net/1pxughrhgws1/2VvvvzZgNOUpRKADmtNYUO/fa947337a947dab2cae639ddd7776a5a/${e}.ogg`
        ).play();
        break;
      case "Penis":
        new Audio(
          `https://assets.ctfassets.net/1pxughrhgws1/3u020kWXuFhUNlxbccKeaU/70d8eae3eb04d2867ef45746a8e47893/${e}.ogg`
        ).play();
        break;
      case "Laugh":
        new Audio(
          `https://assets.ctfassets.net/1pxughrhgws1/65MhiZamOz71Ci3CiFnGoc/2be2bc01c8aacbe43a317ad72d359f0a/${e}.ogg`
        ).play();
        break;
      case "AaAaAa":
        new Audio(
          `https://assets.ctfassets.net/1pxughrhgws1/49aT5rBSxK6tF9mapnz5VX/4977a51a87ddd2a137ac8447ba2e5312/${e}.ogg`
        ).play();
        break;
      case "AaAaAa2":
        new Audio(
          `https://assets.ctfassets.net/1pxughrhgws1/2Oc76PT3WLcSsU5OmPSf7x/a2884f40f5abad53f91a24603f985b7b/${e}.ogg`
        ).play();
        break;
      case "AaAaAa3":
        new Audio(
          `https://assets.ctfassets.net/1pxughrhgws1/21PLWaoiI5d7d5RSX7xTeU/c794ea8f8f14e96a9f14ebd075ebccbc/${e}.ogg`
        ).play();
        break;
      case "AaAaAa4":
        new Audio(
          `https://assets.ctfassets.net/1pxughrhgws1/7ooQLJ24d4vKZfbihL8lGY/2a83344c97da45960340e86418961311/${e}.ogg`
        ).play();
        break;
      case "Who-o-o":
        new Audio(
          `https://assets.ctfassets.net/1pxughrhgws1/3yIHHHIPhWDBZVHxb0jNQR/25805464f4232fd74794f2c71e1a02d2/${e}.ogg`
        ).play();
        break;
      case "LoudBurping":
        new Audio(
          `https://assets.ctfassets.net/1pxughrhgws1/5xv4GpNUlIjTkSFukiwsJe/8e3eb319f1f9148c00796aaba5f46fd6/${e}.ogg`
        ).play();
        break;
      case "LoudBurping2":
        new Audio(
          `https://assets.ctfassets.net/1pxughrhgws1/6rTTKBW6ZsVWeV0LhK6Hee/8adc2acb4f1198eccd4bbcd32b66ffec/${e}.ogg`
        ).play();
        break;
      case "LoudBurping3":
        new Audio(
          `https://assets.ctfassets.net/1pxughrhgws1/3rvJiOZfe8HDjQPOCSYl2H/1be21debf7da48d9cd0d48db4f316a1b/${e}.ogg`
        ).play();
        break;
      case "Mom":
        new Audio(
          `https://assets.ctfassets.net/1pxughrhgws1/53fjTaSXcix3DAhAeRNMjR/f0ec0de5344cb6471ccc69ffcc7caa72/${e}.ogg`
        ).play();
        break;
      case "SonOfAWhore":
        new Audio(
          `https://assets.ctfassets.net/1pxughrhgws1/4KqsdX5zO6Ih6fYKc8wobT/1d932cf6bf6af198cd88753c7813d47b/${e}.ogg`
        ).play();
        break;
      case "Secret":
        new Audio(
          `https://assets.ctfassets.net/1pxughrhgws1/35C7OPROVaJZJPB3qkvl2I/68bee18fb7db3e5c2169c26055668f2b/${e}.ogg`
        ).play();
        break;
      case "NewUpgrade":
        new Audio(
          `https://assets.ctfassets.net/1pxughrhgws1/4D9jnO4h9c8AL6uprrUtLv/a2b03d9e6fec5f34c1644e18a1047439/${e}.ogg`
        ).play();
        break;
      case "CaseRolling":
        new Audio(
          `https://assets.ctfassets.net/1pxughrhgws1/6wi5Mbjdr6vRw8HNBEZ6e/029b858b58ca9f05561909d4eb091d98/${e}.ogg`
        ).play();
        break;
      case "CaseOpening":
        new Audio(
          `https://assets.ctfassets.net/1pxughrhgws1/74WEZKvNRVd6dNW4m8THZ0/1475620579f9eee82f323bb944f15e51/${e}.ogg`
        ).play();
        break;
      case "NewCase":
        new Audio(
          `https://assets.ctfassets.net/1pxughrhgws1/3mbzWukb5w06x5Nt9FIPu3/c077aa74480d852d36110ce9cc6041c3/${e}.ogg`
        ).play();
        break;
      case "none":
        break;
      default:
        var a = { message: `Звук "${e}" не найден!`, timeout: 2e3 };
        snackbar.MaterialSnackbar.showSnackbar(a);
    }
}
function soundIdify(e) {
  switch (e) {
    case "Кликосмех":
      return "Default";
    case "Пенис":
      return "Penis";
    case "Ржач":
      return "Laugh";
    case "АаАаАа":
      return "AaAaAa";
    case "АаАаАа 2":
      return "AaAaAa2";
    case "АаАаАа 3":
      return "AaAaAa3";
    case "АаАаАа 4":
      return "AaAaAa4";
    case "У":
      return "Who-o-o";
    case "МЯУ":
      return "LoudBurping";
    case "МЯУ 2":
      return "LoudBurping2";
    case "МЯУ 3":
      return "LoudBurping3";
    case "Мама...":
      return "Mom";
    case "СЫН ШЛЮХИ D:":
      return "SonOfAWhore";
    case "*секрет*":
      return "Secret";
    default:
      var a = { message: `Кейс "${e}" не найден!`, timeout: 2e3 };
      snackbar.MaterialSnackbar.showSnackbar(a);
  }
}
function soundUnIdify(e) {
  switch (e) {
    case "Default":
      return "Кликосмех";
    case "Penis":
      return "Пенис";
    case "Laugh":
      return "Ржач";
    case "AaAaAa":
      return "АаАаАа";
    case "AaAaAa2":
      return "АаАаАа 2";
    case "AaAaAa3":
      return "АаАаАа 3";
    case "AaAaAa4":
      return "АаАаАа 4";
    case "Who-o-o":
      return "У";
    case "LoudBurping":
      return "МЯУ";
    case "LoudBurping2":
      return "МЯУ 2";
    case "LoudBurping3":
      return "МЯУ 3";
    case "Mom":
      return "Мама...";
    case "SonOfAWhore":
      return "СЫН ШЛЮХИ D:";
    case "Secret":
      return "*секрет*";
    default:
      var a = { message: `Звук "${e}" не найден!`, timeout: 2e3 };
      snackbar.MaterialSnackbar.showSnackbar(a);
  }
}
