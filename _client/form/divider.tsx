import { FC } from "react";

type DividerProps = {
  content?: string;
};

export const Divider: FC<DividerProps> = ({ content }) => {
  return (
    <>
      <div className="relative">
        <div className="flex absolute inset-0 items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="flex relative justify-center text-sm">
          {content ? <span className="px-2 text-gray-500 bg-white">{content}</span> : null}
        </div>
      </div>
    </>
  );
};
