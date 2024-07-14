// Username
var username = document.querySelector("input#username");
var usernameCard = document.querySelector("span#name");
var usernameError = document.querySelector("span#username.error");
username.onkeyup = function (key) {
  if (/\d/.test(username.value)) {
    usernameError.style.display = "block";
    username.classList.add("error");
    return;
  }
  if (!username.value) {
    usernameCard.innerText = "JANE APPLESEED";
    if (usernameError.style.display == "block") {
      usernameError.style.display = "none";
      username.classList.remove("error");
    }
    return;
  }

  usernameCard.innerText = username.value.toUpperCase();

  if (usernameError.style.display == "block") {
    usernameError.style.display = "none";
    username.classList.remove("error");
  }
};

// Number creditcard
var cardNumber = document.querySelector("input#cardNumber");
var creditCardNumber = document.querySelector("span#numCredit");
var creditCardError = document.querySelector("span#number.error");
var creditCardErrorLength = document.querySelector("span#numberLength.error");
cardNumber.onkeyup = function (key) {
  if (isNaN(cardNumber.value.replace(/ /g, ""))) {
    cardNumber.classList.add("error");
    creditCardError.style.display = "block";
    creditCardErrorLength.style.display = "none";
    // return;
  }

  if (cardNumber.value.length < 19)
    creditCardErrorLength.style.display = "block";

  if (cardNumber.value.length == 19) {
    creditCardNumber.innerText = cardNumber.value;
    creditCardErrorLength.style.display = "none";
    return;
  }
  if (!cardNumber.value) {
    creditCardNumber.innerText = "0000 0000 0000 0000";
    if (creditCardError.style.display == "block") {
      cardNumber.classList.remove("error");
      creditCardError.style.display = "none";
      return;
    }
    return;
  }

  cardNumber.value = cardNumber.value.replace(/ /g, "");

  var cardNum = cardNumber.value + "0".repeat(16 - cardNumber.value.length);
  creditCardNumber.innerText = cardNum.replace(/(.{4})/g, "$1 ");

  if (cardNumber.value.length % 4 == 0 && key.key == "Backspace") return;

  cardNumber.value = cardNumber.value.replace(/(.{4})/g, "$1 ");

  if (creditCardError.style.display == "block") {
    cardNumber.classList.remove("error");
    creditCardError.style.display = "none";
    return;
  }
};

//  Back Creditcard
var errorsExpire = document.querySelector("span#exp.error");
var expMounth = document.querySelector("input#expMonth");
var mounthBackCard = document.querySelector("span#mounth");
expMounth.onkeyup = function (key) {
  if (!expMounth.value) {
    mounthBackCard.innerText = "00";
    errorsExpire.style.visibility = "hidden";

    expMounth.classList.remove("error");
    return;
  }

  if (isNaN(expMounth.value) || expMounth.value > 12 || expMounth.value == 0) {
    expMounth.classList.add("error");
    errorsExpire.style.visibility = "unset";
    return;
  }

  if (!expMounth.value) return (mounthBackCard.innerText = "00");

  expMounth.value > 9
    ? (mounthBackCard.innerText = expMounth.value)
    : (mounthBackCard.innerText = expMounth.value.includes("0") ? expMounth.value : "0" + expMounth.value);

  if (errorsExpire.style.visibility == "unset") {
    expMounth.classList.remove("error");
    errorsExpire.style.visibility = "hidden";
  }
};

var expYear = document.querySelector("input#expYear");
var yearsBackCard = document.querySelector("span#years");
expYear.onkeyup = function (key) {
  if (!expYear.value) {
    yearsBackCard.innerText = "00";
    errorsExpire.style.visibility = "hidden";

    expYear.classList.remove("error");
    return;
  }

  if (isNaN(expYear.value) || expYear.value < 24) {
    expYear.classList.add("error");
    errorsExpire.style.visibility = "unset";
    return;
  }

  expYear.value > 9
    ? (yearsBackCard.innerText = expYear.value)
    : (yearsBackCard.innerText = "0" + expYear.value);

  if (errorsExpire.style.visibility == "unset") {
    expYear.classList.remove("error");
    errorsExpire.style.visibility = "hidden";
  }
};

var cvcNumber = document.querySelector("input#cvcNumber");
var cvcBackCard = document.querySelector("span#cvcNumber");
var errorCvc = document.querySelector("span#cvc.error");
cvcNumber.onkeyup = function (key) {
  if (!cvcNumber.value) {
    cvcBackCard.innerText = "000";
    errorCvc.style.visibility = "hidden";
    cvcNumber.classList.remove("error");

    return;
  }

  if (isNaN(cvcNumber.value)) {
    cvcNumber.classList.add("error");
    errorCvc.style.visibility = "unset";
    return;
  }

  cvcBackCard.innerText =
    cvcNumber.value + "0".repeat(3 - cvcNumber.value.length);

  if (errorCvc.style.visibility == "unset") {
    errorCvc.style.visibility = "hidden";
    cvcNumber.classList.remove("error");
  }
};

var confirmButton = document.querySelector("button#confirm");
var confirmationLogo = document.querySelector("div#confirmation");
var form = document.querySelector("form");

confirmButton.onclick = function (event) {
  if (!username.value) {
    usernameError.style.display = "block";
    username.classList.add("error");
  } else if (!cardNumber.value || cardNumber.value == 0) {
    if (cardNumber.value.length != 19)
      return (creditCardErrorLength.style.display = "block");
    cardNumber.classList.add("error");
    creditCardError.style.display = "block";
  } else if (!expMounth.value || expMounth.value == 0) {
    expMounth.classList.add("error");
    errorsExpire.style.visibility = "unset";
  } else if (!expYear.value || expYear.value == 0) {
    expYear.classList.add("error");
    errorsExpire.style.visibility = "unset";
  } else if (!cvcNumber.value || cvcNumber.value.length != 3 || cvcNumber.value == 0) {
    cvcNumber.classList.add("error");
    errorCvc.style.visibility = "unset";
  } else {
    form.style.display = "none";
    confirmationLogo.style.display = "block";
  }
  event.preventDefault();
};
var continueButton = document.querySelector("#continue");
continueButton.onclick = function () {
  location.reload();
};
