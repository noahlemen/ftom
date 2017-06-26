module.exports = function ftom(freq, concertPitch) {
  if (concertPitch === undefined) concertPitch = 440;

  if (typeof freq !== 'number') {
    throw new TypeError("'ftom' expects its first argument to be a number.")
  }

  if (typeof concertPitch !== 'number') {
    throw new TypeError("'ftom' expects its second argument to be a number.")
  }

  return 69 + 12 * Math.log2(freq / concertPitch);
}
