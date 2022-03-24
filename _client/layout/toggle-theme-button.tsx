import clsx from "clsx";
import { FC, useCallback, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useThemeStore } from "../stores/themeStore";
import { TelemetryButton } from "../telemetryButton";
import { TelemetryLink } from "../telemetryLink";

type ToggleThemeButtonProps = {
  className?: string;
};

export const ToggleThemeButton: FC<ToggleThemeButtonProps> = ({ className }) => {
  const [{ theme }, setThemeStore] = useThemeStore();

  const handleClick = useCallback(() => {
    setThemeStore(({ theme, ...rest }) => ({
      ...rest,
      theme: theme === "light" ? "dark" : "light",
    }));
  }, [setThemeStore]);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <TelemetryButton className={clsx(className)} name="ToggleThemeButton" onClick={handleClick}>
      {theme === "light"
        ? <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 hover:dark:bg-gray-600">
            <FiMoon className="text-gray-700 transition-colors duration-75 hover:text-gray-800 dark:text-dark-text" />
          </div>
        : <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 hover:dark:bg-gray-600">
            <FiSun className="text-gray-700 transition-colors duration-75 hover:text-gray-800 dark:text-dark-text" />
          </div>}
    </TelemetryButton>
  );
};

export const sun = () => (
  <>
    <TelemetryButton name="ToggleThemeButton">
      <div className="sun relative flex justify-center">
        <div className="sun__main absolute rounded-full bg-blue-400" />
        <div className="sun__dot--1 absolute h-full w-full">
          <div className="sun__dot absolute rounded-full bg-blue-500" />
        </div>
        <div className="sun__dot--2 absolute h-full w-full">
          <div className="sun__dot absolute rounded-full bg-blue-500" />
        </div>
        <div className="sun__dot--3 absolute h-full w-full">
          <div className="sun__dot absolute rounded-full bg-blue-500" />
        </div>
        <div className="sun__dot--4 absolute h-full w-full">
          <div className="sun__dot absolute rounded-full bg-blue-500" />
        </div>
        <div className="sun__dot--5 absolute h-full w-full">
          <div className="sun__dot absolute rounded-full bg-blue-500" />
        </div>
        <div className="sun__dot--6 absolute h-full w-full">
          <div className="sun__dot absolute rounded-full bg-blue-500" />
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
