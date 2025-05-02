// Password output
const display = document.getElementById("display");
// Copy password button
const copyBtn = document.getElementById("copyBtn");
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

  if (length <= 0 || allowedChars.length === 0) {
    display.value = "Select at least one character type";
    copyBtn.style.display = "none";
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password = password + allowedChars[randomIndex];
  }
  display.value = password;
  copyBtn.style.display = "inline";
}

copyBtn.addEventListener("click", () => {
  if (display.value && !display.value.includes("must")) {
    navigator.clipboard.writeText(display.value);
    copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    setTimeout(() => {
      copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i>';
    }, 1500);
  }
});

generateBtn.addEventListener("click", () => {
  generatePassword(
    passwordLength.value,
    includeNumbers.checked,
    includeSymbols.checked,
    includeLowercase.checked,
    includeUppercase.checked
  );
});
