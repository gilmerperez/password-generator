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
  // Possible characters
  const numberChars = "0123456789";
  const symbolChars = "`~!@#$%^&*()-_=+[{]};:',<.>/?|";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Future password
  let password = "";
  // List of possible character sets
  let allowedChars = "";

  // Append characters to "allowedChars" if they are allowed
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

  // Password length must be more than 1
  if (length <= 0) {
    display.value = "Password length must be at least 1";
    copyBtn.style.display = "none";
    return;
  }

  // At least 1 character type
  if (!allowedChars) {
    display.value = "Select at least one character type";
    copyBtn.style.display = "none";
    return;
  }

  // Generate password by randomly selecting characters from the allowed set
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password = password + allowedChars[randomIndex];
  }

  // Display password and copy button
  display.value = password;
  copyBtn.style.display = "inline";
}

// Copy password to clipboard
copyBtn.addEventListener("click", () => {
  // Only if there is a generated password
  if (display.value && !display.value.includes("must")) {
    navigator.clipboard.writeText(display.value);
    // Replace icon iwht checkmark for validation
    copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    setTimeout(() => {
      // Then remove it after 1.5 seconds
      copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i>';
    }, 1500);
  }
});

// When user clicks on "GENERATE" password button, run generatePassword function with the parameters that the user has selected
generateBtn.addEventListener("click", () => {
  generatePassword(
    parseInt(passwordLength.value),
    includeNumbers.checked,
    includeSymbols.checked,
    includeLowercase.checked,
    includeUppercase.checked
  );
});
