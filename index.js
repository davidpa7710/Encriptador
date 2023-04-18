var input = document.getElementById("txt-input");
var button = document.getElementById("btn-1");
var inputValue = input.value;

var textArea = document.querySelector("#txt-output");
textArea.readOnly = true;
var copyButton = document.getElementById("btn-2")
var button2 = document.getElementById("btn-3")

const letterMap = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
}

const handleClick = () => {
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
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value.trim().length === 0) {
        alert('Escribe un texto porfavor');
    } else {
        handleClick();
    }
})
copyButton.addEventListener("click", () => {
    copyClipboard();
    copyButton.innerHTML = '<em>Copiado  <i class="fa-solid fa-clipboard-check fa-bounce fa-lg"></i></em>';
    setTimeout(() => {
        copyButton.innerHTML = '<a>Copiar <i class="fa-regular fa-clipboard fa-lg"></i></a>';
    }, 3000);
});
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'c') {
        textArea.select();
        document.execCommand('copy');
        copyButton.innerHTML = '<em>Copiado  <i class="fa-solid fa-clipboard-check fa-bounce fa-lg"></i></em>';
        setTimeout(() => {
            copyButton.innerHTML = '<a>Copiar <i class="fa-regular fa-clipboard fa-lg"></i></a>';
        }, 3000);
    }
});

const phraseMap = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
};

const handleClick2 = () => {
    const inputValue = input.value;
    const desEncript = inputValue.split("").map((char, i) => {
        const phrase = inputValue.slice(i, i + 4);
        if (phraseMap[phrase]) {
            return phraseMap[phrase];
        }
        return char;
    }).join("");
    textArea.value = desEncript;
};


button2.addEventListener("click", (e) => {
    e.preventDefault()
    if (input.value.trim().length === 0) {
        alert('Escribe un texto por favor');
    } else {
        handleClick2();
    }
});
