export function formatDate(date: Date, format: string, showAmPm = false) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const hours24 = date.getHours();
  const hours12 = hours24 % 12 || 12;
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const amPm = hours24 >= 12 ? 'PM' : 'AM';
  const monthShortNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const monthLongNames = [
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
    'December',
  ];

  let monthName = '';
  if (format.includes('MMM')) {
    monthName = monthShortNames[date.getMonth()];
  } else if (format.includes('MMMM')) {
    monthName = monthLongNames[date.getMonth()];
  }

  format = format.replace('DD', day);
  format = format.replace('MM', month);
  format = format.replace('YYYY', year);
  format = format.replace('HH', hours24.toString().padStart(2, '0'));
  format = format.replace('hh', hours12.toString().padStart(2, '0'));
  format = format.replace('mm', minutes);
  format = format.replace('ss', seconds);
  format = format.replace('MMM', monthName);
  format = format.replace('MMMM', monthName);
  if (showAmPm) {
    format = format + ' ' + amPm;
  }

  return format;
}
