function camelize(str) {
  let words = str.split('-');
  for (let i = 1; i < words.length; i++){
    let word = words[i];
    let captalizedWord = word[0].toUpperCase() + word.slice(1)
    words[i] = captalizedWord;
  }
  return words.join('');
}
