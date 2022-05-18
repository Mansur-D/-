function generatePassword(length) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let newPassword = '';

  for(let i = 0; i < length; i++) {
    const randomSymbol = alphabet[0]; // я умею брать только первый символ из строки, а нужно взять один случайный символ :(
    newPassword += randomSymbol;
  }

  return newPassword;
}
