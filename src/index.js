module.exports = function towelSort(matrix = []) {
  if (matrix.length === 0) {
    return [];
  }
  return matrix
    .map((row, index) => {
      if (index % 2 !== 0) {
        return [...row].sort((a, b) => b - a);
      }
      return [...row].sort((a, b) => a - b);
    })
    .reduce((acc, row) => [...acc, ...row], []);
};
