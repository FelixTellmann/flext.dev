import { FC, InputHTMLAttributes, MutableRefObject, RefObject } from "react";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
  forwardRef?: RefObject<HTMLInputElement>;
};

export const Checkbox: FC<CheckboxProps> = ({ label, forwardRef, ...htmlInputElementProps }) => {
  return (
    <>
      <label className="flex cursor-pointer select-none items-center text-sm text-gray-900">
        <input
          ref={forwardRef}
          className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          type="checkbox"
          {...htmlInputElementProps}
        />
        <span className="ml-2">{label}</span>
      </label>
    </>
  );
};
