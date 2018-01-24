module.exports = function intersect(a, b) {
  let i = 0;
  let j = 0;

  const removes = [];
  const commons = [];
  const adds = [];

  a = a.sort((a1, a2) => a1 < a2 ? 0 : 1);
  b = b.sort((b1, b2) => b1 < b2 ? 0 : 1);

  compare();
  return { removes, commons, adds };

  function compare() {
    const oldvalue = a[i];
    const newvalue = b[j];

    if (newvalue === undefined) return removes.push(...a.slice(i));
    if (oldvalue === undefined) return adds.push(...b.slice(j));

    if (oldvalue < newvalue) {
      i++;
      removes.push(oldvalue);
    } else if (oldvalue > newvalue) {
      j++;
      adds.push(newvalue);
    } else {
      i++; j++;
      commons.push(oldvalue);
    }
    
    compare();
  }
}