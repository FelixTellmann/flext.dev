import { FC } from "react";

type indexProps = {};

export const Index: FC<indexProps> = ({}) => {
  return (
    <>
      <div className="p-2 mt-4 text-green-900 bg-red-200">hello</div>
      <style jsx>{`
        div {
          background: red;
          &:before {
            content: "wems";
          }
        }
      `}</style>
    </>
  );
};

export default Index;
