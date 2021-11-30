function firstNonRepeatingCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    let c = string.charAt(i);

    if (string.indexOf(c) === i && string.indexOf(c, i + 1) === -1) {
      return i;
    }
  }

  return -1;
}

exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
