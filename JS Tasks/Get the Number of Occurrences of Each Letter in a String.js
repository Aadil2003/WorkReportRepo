function count(str) {
  const letterCount = {};
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char === ' ') continue;
    
    letterCount[char] = (letterCount[char] || 0) + 1;
  }
  
  return letterCount;
}

count("Aadil");
