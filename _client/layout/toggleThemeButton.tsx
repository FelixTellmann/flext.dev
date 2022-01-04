import { useCallback } from "react";
import { useThemeStore } from "../stores/themeStore";
import { TelemetryButton } from "../telemetryButton";
import { TelemetryLink } from "../telemetryLink";

export const ToggleThemeButton = () => {
  const [{ theme }, setThemeStore] = useThemeStore();

  const handleClick = useCallback(() => {
    setThemeStore(({ theme, ...rest }) => ({
      ...rest,
      theme: theme === "light" ? "dark" : "light",
    }));
  }, [setThemeStore]);

  return (
    <>
      <TelemetryButton name="ToggleThemeButton" onClick={handleClick}>
        <div className="flex relative justify-center sun">
          <div className="absolute bg-blue-400 rounded-full sun__main" />
          <div className="absolute w-full h-full sun__dot--1">
            <div className="absolute bg-blue-500 rounded-full sun__dot" />
          </div>
          <div className="absolute w-full h-full sun__dot--2">
            <div className="absolute bg-blue-500 rounded-full sun__dot" />
          </div>
          <div className="absolute w-full h-full sun__dot--3">
            <div className="absolute bg-blue-500 rounded-full sun__dot" />
          </div>
          <div className="absolute w-full h-full sun__dot--4">
            <div className="absolute bg-blue-500 rounded-full sun__dot" />
          </div>
          <div className="absolute w-full h-full sun__dot--5">
            <div className="absolute bg-blue-500 rounded-full sun__dot" />
          </div>
          <div className="absolute w-full h-full sun__dot--6">
            <div className="absolute bg-blue-500 rounded-full sun__dot" />
          </div>
        </div>
      </TelemetryButton>
      <style jsx>{`
        .sun {
          --sun-size: 50px;
          width: var(--sun-size);
          height: var(--sun-size);
        }

        .sun__main {
          width: calc(var(--sun-size) * 0.4);
          height: calc(var(--sun-size) * 0.4);
          top: calc(var(--sun-size) * 0.3);
          bottom: calc(var(--sun-size) * 0.3);
          left: calc(var(--sun-size) * 0.3);
          right: calc(var(--sun-size) * 0.3);
        }

        .sun__dot {
          width: calc(var(--sun-size) * 0.16);
          height: calc(var(--sun-size) * 0.16);
          top: calc(50% - (var(--sun-size) * 0.16 / 2));
          bottom: calc(50% - (var(--sun-size) * 0.16 / 2));
          left: calc(50% - (var(--sun-size) * 0.16 / 2));
          right: calc(50% - (var(--sun-size) * 0.16 / 2));
          transform: translateY(17px);
        }
        .sun__dot--1 {
          transform: rotate(0deg);
        }
        .sun__dot--2 {
          transform: rotate(60deg);
        }
        .sun__dot--3 {
          transform: rotate(120deg);
        }
        .sun__dot--4 {
          transform: rotate(180deg);
        }
        .sun__dot--5 {
          transform: rotate(240deg);
        }
        .sun__dot--6 {
          transform: rotate(300deg);
        }
      `}</style>
    </>
  );
};
