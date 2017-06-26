module.exports = function ftom(freq, concertPitch) {
  if (concertPitch === undefined) concertPitch = 440;
  return 69 + 12 * Math.log2(freq / concertPitch);
}
