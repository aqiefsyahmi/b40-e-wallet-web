export const useTime = () => {
  const format = value => {
    const date =
      value &&
      new Date(value.slice(0, 10)).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }); // DD MMM YYYY
    const time = value && value.slice(11, 16); // HH.MM

    return {
      date: date,
      time: time,
    };
  };

  return format;
};
