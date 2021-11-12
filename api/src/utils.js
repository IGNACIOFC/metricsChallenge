export function thirtyMinutesLess() {
  const dateUTC = new Date
  const halfHour = 30 * 60000
  const dateMls = dateUTC.getTime()
  const todayDate = dateMls
  const finalDateObj = new Date(todayDate - halfHour)

  const finalDate = finalDateObj.toISOString()
  return finalDate;
}

export function oneDayLess() {
  const dateUTC = new Date
  const oneHour = 60 * 60000
  const oneDay = oneHour * 24
  const dateMls = dateUTC.getTime()
  const todayDate = dateMls
  const finalDateObj = new Date(todayDate - oneDay)

  const finalDate = finalDateObj.toISOString()

  return finalDate;
}

export function oneWeekLess() {
  const dateUTC = new Date
  const oneHour = 60 * 60000
  const oneDay = oneHour * 24
  const oneWeek = oneDay * 7
  const dateMls = dateUTC.getTime()
  const todayDate = dateMls
  const finalDateObj = new Date(todayDate - oneWeek)

  const finalDate = finalDateObj.toISOString()

  return finalDate;
}
export function newDate() {
  const dateUTC = new Date
  const oneHour = 60 * 60000
  const dateMls = dateUTC.getTime()
  const todayDate = dateMls + oneHour

  return todayDate;
}

export function orderByMinutes(acc, object) {
  const minutes = new Date(object.createdAt).getMinutes();
  acc[minutes] = (acc[minutes] || 0) + parseInt(object.price)
  return acc;
}

export function orderByHours(acc, object) {
  const hours = new Date(object.createdAt).getHours();
  acc[hours] = (acc[hours] || 0) + parseInt(object.price)
  return acc;
}

export function orderByDays(acc, object) {
  const days = new Date(object.createdAt).getDay();
  acc[days] = (acc[days] || 0) + parseInt(object.price)
  return acc;
}