export const createGridOptions = (
  grid: number[]
): {
  pairIndex: number;
  reveals: number;
  selected: boolean;
  solved: boolean;
  value: number;
}[] => {
  return grid.map((num, i) => ({
    solved: false,
    selected: false,
    reveals: 0,
    value: num,
    pairIndex: grid.findIndex((v, j) => v === num && i !== j),
  }));
};
