export const formatDate = (dateStr: string) => {
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  const formattedDate = new Date(dateStr).toLocaleDateString(undefined, options);
  return formattedDate;
};
