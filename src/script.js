const input = document.querySelector("#textarea-input");
const output = document.querySelector("#textarea-output");
let isEncrypt = true;
let key = document.querySelector("#key-input").value;
const inputTitleDecrypt = document.querySelector("#input-title-decrypt");
const inputTitleEncrypt = document.querySelector("#input-title-encrypt");
const outputTitleDecrypt = document.querySelector("#output-title-decrypt");
const outputTitleEncrypt = document.querySelector("#output-title-encrypt");
const conditionsArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
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
  key = document.querySelector("#key-input").value;
  encrypt(key);
  inputTitleDecrypt.classList.add("text-blue-600");
  inputTitleEncrypt.classList.remove("text-blue-600");
  outputTitleDecrypt.classList.add("text-blue-600");
  outputTitleEncrypt.classList.remove("text-blue-600");
}
function decryptState() {
  isEncrypt = false;
  key = document.querySelector("#key-input").value;
  decrypt(key);
  inputTitleEncrypt.classList.add("text-blue-600");
  inputTitleDecrypt.classList.remove("text-blue-600");
  outputTitleEncrypt.classList.add("text-blue-600");
  outputTitleDecrypt.classList.remove("text-blue-600");
}
function handleKeyInput(e) {
  key = document.querySelector("#key-input").value;
  if (isEncrypt) {
    encrypt(key);
  } else {
    decrypt(key);
  }
}
function encrypt(key) {
  let rs = "";
  const inputStringSplit = input.value.split('');
  for(let i =0; i<inputStringSplit.length;i++){
    const index = conditionsArray.indexOf(inputStringSplit[i])
    if(inputStringSplit[i]==" "){
      rs=rs+" "
    } else if(conditionsArray.includes(inputStringSplit[i])){
      rs = rs + conditionsArray[(index+Number(key))%conditionsArray.length]
    } else{
      rs=rs+inputStringSplit[i]
    }
  }
  output.innerHTML = rs;
}
function decrypt(key) {
  let rs = "";
  const inputStringSplit = input.value.split('');
  for(let i =0; i<inputStringSplit.length;i++){
    const index = conditionsArray.indexOf(inputStringSplit[i])
    if(inputStringSplit[i]==" "){
      rs=rs+" "
    } else if(conditionsArray.includes(inputStringSplit[i])){
      rs = rs + conditionsArray[dequyDecrypt((index-Number(key)+conditionsArray.length)%conditionsArray.length)]
    } else{
      rs=rs+inputStringSplit[i]
    }
  }
  output.innerHTML = rs;
}
function dequyDecrypt(num){
  if(num<0){
    return dequyDecrypt(num + conditionsArray.length)
  }
  return num
}
