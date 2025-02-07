function Backtrack(str) {
  const result = [];

  function backtrack(start, path) {
    if (path.length > 0) {
      result.push(path.join(""));
    }

    for (let i = start; i < str.length; i++) {
      path.push(str[i]); 
      backtrack(i + 1, path); 
      path.pop(); 
    }
  }

  backtrack(0, []);
  return result;
}
Backtrack("Aadil");
