export const createGrid = (size: `${number}x${number}`) => {
  const count = parseInt(size.split("x")[0]);
  return [
    ...Array.from(Array(count ** 2 / 2).keys()),
    ...Array.from(Array(count ** 2 / 2).keys()),
  ].sort(() => Math.random() - 0.5);
};
