import { FC, MouseEventHandler } from "react";

type IconButtonProps = {
  content: string;
  icon: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const IconButton: FC<IconButtonProps> = ({ content, icon, onClick }) => {
  return (
    <button
      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm text-xl font-medium text-gray-500 shadow-sm transition-colors hfa:bg-slate-100 hfa:text-gray-800"
      type="button"
      onClick={onClick}
    >
      <span className="sr-only">{content}</span>
      {icon}
    </button>
  );
};
