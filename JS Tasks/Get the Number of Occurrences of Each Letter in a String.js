function count(str) {
  const letterMap = new Map();

  for (let char of str.replace(/\s+/g, "").toLowerCase()) {
    if (letterMap.has(char)) {
      letterMap.set(char, letterMap.get(char) + 1);
    } else {
      letterMap.set(char, 1);
    }
  }

  return letterMap;
}
count("Aadil");