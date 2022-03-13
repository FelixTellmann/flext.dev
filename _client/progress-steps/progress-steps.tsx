import { Children, cloneElement, FC, isValidElement } from "react";

export type Step = {
  completed: boolean;
  description: string;
  sections: InputTypes[];
  selected: boolean;
  title: string;
};

export type InputTypes =
  | {
      id: string;
      label: string;
      type: "checkbox";
      default?: boolean;
      info?: string;
    }
  | {
      id: string;
      label: string;
      type: "switch";
      default?: boolean;
      info?: string;
    }
  | {
      label: string;
      options: { label: string; value: string }[];
      type: "radio";
      default?: string;
      info?: string;
    }
  | {
      id: string;
      label: string;
      type: "number";
      default?: number;
      float?: boolean;
      info?: string;
      placeholder?: string;
      unit?: string;
    }
  | {
      default: number;
      id: string;
      label: string;
      max: number;
      min: number;
      step: number;
      type: "range";
      unit: string;
      info?: string;
    }
  | {
      label: string;
      options: { label: string; value: string }[];
      type: "select";
      default?: string;
      info?: string;
    }
  | {
      id: string;
      label: string;
      type: "text";
      default?: string;
      info?: string;
      placeholder?: string;
    }
  | {
      id: string;
      label: string;
      type: "textarea";
      default?: string;
      info?: string;
      placeholder?: string;
    }
  | {
      id: string;
      label: string;
      type: "richtext";
      default?: string;
      info?: string;
      placeholder?: string;
    }
  | {
      id: string;
      label: string;
      type: "datetime";
      day?: "numeric" | "2-digit" | undefined;
      default?: Date;
      hour?: "numeric" | "2-digit" | undefined;
      hour12?: boolean | undefined;
      info?: string;
      minute?: "numeric" | "2-digit" | undefined;
      month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
      placeholder?: string;
      second?: "numeric" | "2-digit" | undefined;
      weekday?: "long" | "short" | "narrow" | undefined;
    };

export const ProgressSteps: FC = ({ children }) => {
  return (
    <nav aria-label="Progress " className="max-w-[300px]">
      <ol className="overflow-hidden" role="list">
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
