export const chooseRamdomly = (elements) => {
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
};
