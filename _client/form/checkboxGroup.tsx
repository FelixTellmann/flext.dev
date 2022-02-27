import { CheckboxItem } from "_client/form/checkboxItem";
import { FC } from "react";

type CheckboxGroupProps = {
  items: {
    setValue: (val: boolean) => void;
    title: string;
    value: boolean;
    subtitle?: string;
  }[];
  title: string;
  subtitle?: string;
};

export const CheckboxGroup: FC<CheckboxGroupProps> = ({ title, subtitle, items }) => {
  return (
    <>
      <fieldset>
        <div>
          <legend className="text-base font-medium text-gray-900 dark:text-dark-headings">
            {title}
          </legend>
          <p className="text-sm text-gray-500 dark:text-dark-text">{subtitle}</p>
        </div>
        <div className="mt-4 space-y-4">
          {items.map((item, index) => (
            <CheckboxItem key={item.title + index} {...item} />
          ))}
        </div>
      </fieldset>
    </>
  );
};
