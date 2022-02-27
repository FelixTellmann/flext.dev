import { FC } from "react";

type IconButtonProps = {
  content: string;
  icon: string | JSX.Element;
  onClick: (e) => void;
};

export const IconButton: FC<IconButtonProps> = ({ content, icon, onClick }) => {
  return (
    <button
      className="inline-flex justify-center py-2 px-4 w-full text-sm text-xl font-medium text-gray-500 hfa:text-gray-800 bg-white hfa:bg-slate-100 rounded-md border border-gray-300 shadow-sm transition-colors"
      type="button"
      onClick={onClick}
    >
      <span className="sr-only">{content}</span>
      {icon}
    </button>
  );
};
