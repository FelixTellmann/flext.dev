import { FC } from "react";

type indexProps = {};

export const Index: FC<indexProps> = ({}) => {
  return (
    <>
      <div>hello</div>
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
