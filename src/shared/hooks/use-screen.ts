import { useContext } from "react";
import { ScreenContext } from "../contexts";

export const useScreen = () => {
  const context = useContext(ScreenContext);

  if (context) {
    return context;
  }
  throw new Error("You can't use context outside of context wrapper");
};
