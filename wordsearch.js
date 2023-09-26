
const transpose = function (mat) {
 
    const result = [];
  
    for (let i = 0; i < mat[0].length; i++) {
      const col = []
      for (let j = 0; j < mat.length; j++) {
        col.push(mat[j][i]);
      }
      result.push(col)
    }
  
    return result
  };
  const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    const lengthle = letters.length;
    if (lengthle === 0) {
      return false;
    }
  
    for (let l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
  
    for (let l of verticalJoin) {
      if (l.includes(word)) return true;
    }
  
    return false;
  };
  
  module.exports = wordSearch;