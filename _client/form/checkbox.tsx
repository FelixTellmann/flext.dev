import { FC, InputHTMLAttributes, MutableRefObject } from "react";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
  forwardRef?: MutableRefObject<HTMLInputElement>;
};

export const Checkbox: FC<CheckboxProps> = ({ label, forwardRef, ...htmlInputElementProps }) => {
  return (
    <>
      <label className="flex items-center text-sm text-gray-900 cursor-pointer select-none">
        <input
          ref={forwardRef}
          className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer"
          type="checkbox"
          {...htmlInputElementProps}
        />
        <span className="ml-2">{label}</span>
      </label>
    </>
  );
};
