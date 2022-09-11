function generatePassword(length, level = "easy", count = 1) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const symbols = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
  let res = alphabet;
  const passwords = [];
  if (level === "medium") {
    res += digits;
  } else if (level === "hard") {
    res += digits + symbols;
  }
  for (let j = 0; j < count; j++) {
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomSymbol = res[Math.floor(Math.random() * (res.length - 1))];
      newPassword += randomSymbol;
    }
    if (passwords.indexOf(newPassword) != -1) {
      j--;
    } else {
      passwords.push(newPassword);
    }
  }
  return passwords;
}

console.log(generatePassword(4, "easy"));
console.log(generatePassword(6, "medium", 2));
console.log(generatePassword(7, "hard", 10));