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
      <label className="flex items-start cursor-pointer select-none">
        <div className="flex items-center h-5">
          <input
            checked={!!value}
            className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
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
