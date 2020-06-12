const input = document.querySelector("#textarea-input");
const output = document.querySelector("#textarea-output");
let isEncrypt = true;
const inputTitleDecrypt = document.querySelector("#input-title-decrypt");
const inputTitleEncrypt = document.querySelector("#input-title-encrypt");
const outputTitleDecrypt = document.querySelector("#output-title-decrypt");
const outputTitleEncrypt = document.querySelector("#output-title-encrypt");
const conditionsArray = [
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104,
  105,
  106,
  107,
  108,
  109,
  110,
  111,
  112,
  113,
  114,
  115,
  116,
  117,
  118,
  119,
  120,
  121,
  122,
];
encryptState();
function changeState(state) {
  if (state == "decrypt") {
    decryptState();
  } else {
    encryptState();
  }
}
function encryptState() {
  isEncrypt = true;
  encrypt();
  inputTitleDecrypt.classList.add("text-blue-600");
  inputTitleEncrypt.classList.remove("text-blue-600");
  outputTitleDecrypt.classList.add("text-blue-600");
  outputTitleEncrypt.classList.remove("text-blue-600");
}
function decryptState() {
  isEncrypt = false;
  decrypt();
  inputTitleEncrypt.classList.add("text-blue-600");
  inputTitleDecrypt.classList.remove("text-blue-600");
  outputTitleEncrypt.classList.add("text-blue-600");
  outputTitleDecrypt.classList.remove("text-blue-600");
}
function handleKeyInput(e) {
  if (isEncrypt) {
    encrypt();
  } else {
    decrypt();
  }
}
function dequyEncrypt1(char) {
  if (char > 96) {
    return char;
  }
  return dequyEncrypt1(char + 97);
}
function dequyEncrypt2(char) {
  if (char < 122) {
    return char;
  }
  return dequyEncrypt2(char - 26);
}
function encrypt() {
  let key = document.querySelector("#key-input").value;
  let rs = "";
  if (key == "") {
    key = 0;
  }
  for (let i = 0; i < input.value.length; i++) {
    let charCode = input.value.toLowerCase().charAt(i).charCodeAt(0);
    let charCodeRs = (charCode + parseInt(key)) % 123;
    if (charCodeRs < 97) {
      charCodeRs = dequyEncrypt1(charCodeRs);
    }
    if (charCodeRs > 122) {
      charCodeRs = dequyEncrypt2(charCodeRs);
    }
    console.log(charCodeRs);
    if (!conditionsArray.includes(charCode)) {
      rs += String.fromCharCode(charCode);
    } else {
      rs += String.fromCharCode(charCodeRs);
    }
  }
  output.innerHTML = rs;
}
function dequyDecrypt1(char) {
  if (char > 96) {
    return char;
  }
  return dequyDecrypt1(char + 26);
}
function dequyDecrypt2(char) {
  if (char > 122) {
    return char;
  }
  return dequyDecrypt2(char - 97);
}
function decrypt() {
  let key = document.querySelector("#key-input").value;
  let rs = "";
  if (key == "") {
    key = 0;
  }
  for (let i = 0; i < input.value.length; i++) {
    let charCode = input.value.toLowerCase().charAt(i).charCodeAt(0);
    let charCodeRs = (charCode - parseInt(key)) % 123;
    if (charCodeRs < 97) {
      charCodeRs = dequyDecrypt1(charCodeRs);
    }
    if (charCodeRs > 122) {
      charCodeRs = dequyDecrypt2(charCodeRs);
    }
    if (!conditionsArray.includes(charCode)) {
      rs += String.fromCharCode(charCode);
    } else {
      rs += String.fromCharCode(charCodeRs);
    }
  }
  output.innerHTML = rs;
}
