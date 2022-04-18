import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export const useCopyToClipboard = () => {
  const copy = useCallback((str: string) => {
    console.log(str);
  }, []);
  return [copy];
};

export default useCopyToClipboard;
