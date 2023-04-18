var input = document.getElementById("txt-input");
var button = document.getElementById("btn-1");
var inputValue = input.value;

var textArea = document.querySelector("#txt-output");
textArea.readOnly = true;
var copyButton = document.getElementById("btn-2")

const letterMap = {
   "a": "ai",
   "e": "enter",
   "i": "imes",
   "o": "ober",
   "u": "ufat"
}
const handleClick = (e) => {
    e.preventDefault();
    const inputValue = input.value;
    const encript = inputValue.split("").map((letter) => {
       if (letterMap[letter]) {
            return letterMap[letter];
        }
        return letter;
    }).join("");
    textArea.value = encript
};
const copyClipboard = () => {
    navigator.clipboard.writeText(textArea.value)
    alert("texto copiado")
}

button.addEventListener("click", handleClick)
copyButton.addEventListener("click", copyClipboard)

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && event.key === 'c') {
      textArea.select();
      document.execCommand('copy');
      alert('texto copiado');
    }
  });
  