import { FC, HTMLInputTypeAttribute, InputHTMLAttributes, MutableRefObject, RefObject } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  forwardRef?: RefObject<HTMLInputElement>;
};

export const TextInput: FC<TextInputProps> = ({
  forwardRef,
  value,
  onChange,
  label,
  children,
  ...htmlInputElementProps
}) => {
  return (
    <>
      <label className="mt-1 block text-sm font-medium text-gray-700">
        <span>{label}</span>
        <input
          ref={forwardRef}
          autoComplete="current-password"
          className="block w-full appearance-none rounded-md border border-gray-300 py-2 px-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          value={value}
          onChange={onChange}
          {...htmlInputElementProps}
        />
      </label>
    </>
  );
};
