export const getGridSize = (size: "4x4" | "6x6" | "8x8") => {
  switch (size) {
    case "4x4": {
      return "w-16 h-16 sm:w-28 sm:h-28";
    }
    case "6x6": {
      return "w-12 h-12 sm:w-20 sm:h-20";
    }
    case "8x8": {
      return "w-10 h-10 sm:w-16 sm:h-16";
    }
  }
};
