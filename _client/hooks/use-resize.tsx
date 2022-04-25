import { useCallback, useEffect, useState } from "react";

export const useResize = (element?: HTMLElement | null) => {
  const [width, setWidth] = useState(element?.offsetWidth ?? 0);
  const [height, setHeight] = useState(element?.offsetHeight ?? 0);

  const handleWindowSizeChange = useCallback(() => {
    setWidth(element?.offsetWidth ?? window.innerWidth);
    setHeight(element?.offsetHeight ?? window.innerHeight);
  }, [element?.offsetWidth, element?.offsetHeight]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [element, handleWindowSizeChange]);

  return [width, height];
};

export default useResize;
