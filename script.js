// Password output
const display = document.getElementById("display");
// Generate Button
const generateBtn = document.getElementById("generateBtn");
// Parameters
const passwordLength = document.getElementById("passwordLength");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const includeLowercase = document.getElementById("includeLowercase");
const includeUppercase = document.getElementById("includeUppercase");

function generatePassword(
  length,
  includeNumbers,
  includeSymbols,
  includeLowercase,
  includeUppercase
) {
  const numberChars = "0123456789";
  const symbolChars = "`~!@#$%^&*()-_=+[{]};:',<.>/?|";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let password = "";
  let allowedChars = "";

  if (includeNumbers) {
    allowedChars = allowedChars + numberChars;
  }

  if (includeSymbols) {
    allowedChars = allowedChars + symbolChars;
  }

  if (includeLowercase) {
    allowedChars = allowedChars + lowercaseChars;
  }

  if (includeUppercase) {
    allowedChars = allowedChars + uppercaseChars;
  }

  if (length <= 0) {
    display.value = "Password length must be at least 1";
    return;
  }

  if (allowedChars.length === 0) {
    display.value = "Select at least one character type";
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password = password + allowedChars[randomIndex];
  }
  display.value = password;
}

generateBtn.addEventListener("click", () => {
  generatePassword(
    passwordLength.value,
    includeNumbers.checked,
    includeSymbols.checked,
    includeLowercase.checked,
    includeUppercase.checked
  );
});
