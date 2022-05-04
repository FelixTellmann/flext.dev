import { FC, useEffect, useRef, useState } from "react";

export const Counter: FC<{ startTime: number; stopCounter: boolean }> = ({
  startTime,
  stopCounter,
}) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const interval: { current: NodeJS.Timeout | null } = useRef(null);

  useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }
    if (!stopCounter) {
      setTimeElapsed(0);
      interval.current = setInterval(
        () => {
          setTimeElapsed(Date.now() - startTime);
        },
        1000
      );
    }
  }, [startTime, stopCounter]);

  return (
    <>
      {new Date(timeElapsed).toLocaleTimeString("en-GB", {
        minute: "2-digit",
        second: "2-digit",
      })}
    </>
  );
};
