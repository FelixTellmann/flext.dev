import { Children, cloneElement, FC, isValidElement } from "react";

export const ProgressSteps: FC = ({ children }) => {
  return (
    <nav aria-label="Progress " className="w-full md:max-w-[300px]">
      <ol className="flex overflow-hidden md:sticky md:top-[200px] md:flex-col" role="list">
        {Children.map(children, (step, index) => {
          if (isValidElement(step)) {
            return cloneElement(step, { isLast: index === Children.count(children) - 1 });
          }
          return null;
        })}
      </ol>
    </nav>
  );
};
