export default function daysToXmas(date) {
  const xMasDay = new Date('Dec 25, 2021');
  const diffInMillis = xMasDay.getTime() - date.getTime()

  return Math.ceil(diffInMillis / (60*60*24*1000));
}