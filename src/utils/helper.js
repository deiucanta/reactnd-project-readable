export const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1)

export const indexById = arr => arr.reduce((obj, item) => {
  obj[item.id] = item
  return obj
}, {})

export const formatDate = date => {
  var monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}