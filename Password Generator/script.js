const password = document.getElementById("password");

const copyBtn = document.getElementById("copyBtn");

const clear = document.getElementById("clear");

const generateBtn = document.getElementById("generateBtn");

const length = document.getElementById("length");

const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");

const lowercase = document.getElementById("lowercase");

const numbers = document.getElementById("numbers");

const symbols = document.getElementById("symbols");


const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";

const numberChars = "0123456789";

const symbolChars = "!@#$%^&*()_+[]{}<>?";


const generatePassword = () => {

    let characters = "";

    let newPassword = "";


    if (uppercase.checked) {

        characters += uppercaseChars;

    }


    if (lowercase.checked) {

        characters += lowercaseChars;

    }


    if (numbers.checked) {

        characters += numberChars;

    }


    if (symbols.checked) {

        characters += symbolChars;

    }

    if (characters.length === 0) {

        alert("Please select at least one option");

        return;

    }

    for (let i = 0; i < length.value; i++){

        const randomIndex = Math.floor( Math.random() * characters.length);

        newPassword += characters[randomIndex];

    }

    password.value = newPassword;

};


length.addEventListener("input", () => {

    lengthValue.textContent = length.value;

});


generateBtn.addEventListener("click", generatePassword);


copyBtn.addEventListener("click", () => {

    if (password.value === "") {

        alert("Generate a password first");

        return;

    }


    navigator.clipboard.writeText( password.value);

    alert("Password copied!");

});

clear.addEventListener("click", () => {

    password.value = "";
})
