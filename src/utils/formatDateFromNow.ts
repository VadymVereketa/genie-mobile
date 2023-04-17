function formatDateFromNow(date: Date): string {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - date.getTime();

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;

  if (diffInMilliseconds < minute) {
    return 'just now';
  } else if (diffInMilliseconds < hour) {
    const diffInMinutes = Math.round(diffInMilliseconds / minute);
    return `${diffInMinutes} ${diffInMinutes > 1 ? 'mins' : 'min'} ago`;
  } else if (diffInMilliseconds < day) {
    const diffInHours = Math.round(diffInMilliseconds / hour);
    return `${diffInHours} ${diffInHours > 1 ? 'hrs' : 'hr'} ago`;
  } else if (diffInMilliseconds < week) {
    const diffInDays = Math.round(diffInMilliseconds / day);
    if (diffInDays === 1) {
      return 'Yesterday';
    } else {
      return `${diffInDays} ${diffInDays > 1 ? 'days' : 'day'} ago`;
    }
  } else if (diffInMilliseconds < 30 * day) {
    const diffInWeeks = Math.round(diffInMilliseconds / week);
    return `${diffInWeeks} ${diffInWeeks > 1 ? 'weeks' : 'week'} ago`;
  } else if (diffInMilliseconds < 365 * day) {
    const diffInMonths = Math.round(diffInMilliseconds / (30 * day));
    return `${diffInMonths} ${diffInMonths > 1 ? 'months' : 'month'} ago`;
  } else {
    return date.toLocaleDateString();
  }
}

export default formatDateFromNow;
