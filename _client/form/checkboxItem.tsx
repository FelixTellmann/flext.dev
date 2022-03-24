import { FC, InputHTMLAttributes } from "react";

type CheckboxItemProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "value"> & {
  setValue: (val: boolean) => void;
  title: string;
  value: boolean;
  subtitle?: string;
};

export const CheckboxItem: FC<CheckboxItemProps> = ({
  title,
  value,
  setValue,
  subtitle,
  children,
  ...htmlInputElementProps
}) => {
  return (
    <>
      <label className="flex cursor-pointer select-none items-start">
        <div className="flex h-5 items-center">
          <input
            checked={!!value}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            type="checkbox"
            onChange={(e) => setValue(e.target.checked)}
            {...htmlInputElementProps}
          />
        </div>
        <div className="ml-3 text-sm">
          <div className="font-medium text-gray-700 dark:text-dark-headings">{title}</div>
          <p className="text-gray-500 dark:text-dark-text">{subtitle}</p>
        </div>
      </label>
    </>
  );
};
