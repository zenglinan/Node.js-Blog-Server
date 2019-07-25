const getCookieExpires = (sec) => {
  const d = new Date()
  d.setTime(d.getTime() + ( sec * 1000))
  return d.toGMTString()
}
module.exports = getCookieExpires