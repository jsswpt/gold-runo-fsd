import { createContext } from "react";
import { Screen } from "./screen.type";

export const ScreenContext = createContext<Screen | null>(null);
