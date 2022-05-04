import { MemorySettings } from "_client/memory/memory-settings";
import { FC } from "react";

type MemoryProps = {};

export const Memory: FC<MemoryProps> = (props) => {
  return <MemorySettings />;
};

export default Memory;
