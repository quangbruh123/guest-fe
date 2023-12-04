export const dayRemain = (endDate) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const formattedDate = `${year}-${month}-${day}`;
  const startDate = new Date(formattedDate);
  const endDate_temps = new Date(endDate);

  const duration = endDate_temps - startDate;
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));

  return days;
};
