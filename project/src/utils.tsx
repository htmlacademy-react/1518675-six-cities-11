const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

const calculateWidthRating = (number: number) => {
  const maxRating = 5;
  return (100 * number / maxRating).toFixed(0);
};

export {capitalizeFirstLetter, calculateWidthRating};
