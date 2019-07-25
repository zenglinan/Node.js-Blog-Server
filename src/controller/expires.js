const getCookieExpires = () => {
  const d = new Date()
  d.setTime(d.getTime() + ( 1000))
  return d.toGMTString()
}
module.exports = getCookieExpires