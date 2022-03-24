import { FC } from "react";

type DividerProps = {
  content?: string;
};

export const Divider: FC<DividerProps> = ({ content }) => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          {content ? <span className="bg-white px-2 text-gray-500">{content}</span> : null}
        </div>
      </div>
    </>
  );
};
