export function formatNumber(number: number) {
  // Convert number to absolute value to handle negative numbers
  const absNumber = Math.abs(number);

  // Define suffixes for thousands and millions
  const suffixes = ['', 'k', 'M'];

  // Determine the appropriate suffix based on the number's magnitude
  const magnitude = Math.floor(Math.log10(absNumber) / 3);
  const suffix = suffixes[magnitude];

  // Calculate the formatted number
  const formattedNumber = number / Math.pow(10, magnitude * 3);

  // Use toFixed(1) to keep only one decimal place
  return formattedNumber.toFixed(0) + suffix;
}

export function formatDate(dateString: string) {
  const currentDate = new Date();
  const inputDate = new Date(dateString);

  const yearDiff = currentDate.getFullYear() - inputDate.getFullYear();
  const monthDiff = currentDate.getMonth() - inputDate.getMonth();
  const dayDiff = currentDate.getDate() - inputDate.getDate();

  if (yearDiff > 0) {
      return `${yearDiff} ${yearDiff === 1 ? 'year' : 'years'} ago`;
  } else if (monthDiff > 0) {
      return `${monthDiff} ${monthDiff === 1 ? 'month' : 'months'} ago`;
  } else if (dayDiff > 0) {
      return `${dayDiff} ${dayDiff === 1 ? 'day' : 'days'} ago`;
  } else {
      return 'Today';
  }
}