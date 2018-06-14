module.exports = function intersect(a, b) {
  const removes = [];
  const commons = [];

  for (let i = 0; i < a.length; i++) {
    const value = a[i];
    const index = b.indexOf(value);
    if (index === -1) {
      removes.push(value);
    } else {
      commons.push(value);
    }
    b.splice(index, 1);
  }
  return {
    removes, commons,
    adds: b
  }
};