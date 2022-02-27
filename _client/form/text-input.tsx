import { FC, HTMLInputTypeAttribute, InputHTMLAttributes, MutableRefObject } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  forwardRef?: MutableRefObject<HTMLInputElement>;
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
      <label className="block mt-1 text-sm font-medium text-gray-700">
        <span>{label}</span>
        <input
          ref={forwardRef}
          autoComplete="current-password"
          className="block py-2 px-3 w-full placeholder-gray-400 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm appearance-none focus:outline-none sm:text-sm"
          value={value}
          onChange={onChange}
          {...htmlInputElementProps}
        />
      </label>
    </>
  );
};
