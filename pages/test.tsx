import { useMutation } from "_client/hooks/_useTRPC";
import { FC } from "react";

type TestProps = {};

export const Test: FC<TestProps> = (props) => {
  const addViewMutation = useMutation(["posts.addView"]);
  return <>Test</>;
};

export default Test;
