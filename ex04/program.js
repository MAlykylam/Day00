function levDist(str1, str2) {
  let count =
    Math.max(str1.length, str2.length) - Math.min(str1.length, str2.length);
  let lastCharPos = -1;

  for (let i = 0; i < str1.length; i++) {
    let charPos = str2.indexOf(str1[i]);
    if (charPos == -1) {
      count += 1;
      // caractère introuvable, donc à inserer ou remplacer
    } else if (charPos < lastCharPos) {
      count += 2; // une opération de suppréssion + une opération d'ajout
      // le caractère a été trouvé, mais on a déja passé la position avant, donc il faut
      // le supprimer ou le remplacer avant, puis le réinserer à la fin
    } else if (charPos == lastCharPos) {
      count += 1;
    } else {
      lastCharPos = charPos;
      // le caractère à été trouvé à une bonne place, donc aucune action n'est requise
    }
  }
  return count;
}
exports.levDist = levDist;
