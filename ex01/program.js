function isPalindrome(string) {
  const len = string.length;
  console.log(len);

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "false";
    }
  }
  return "true";
}

const string = prompt("Tapez le mot: ");

const value = isPalindrome(string);

console.log(value);

exports.isPalindrome = isPalindrome;
