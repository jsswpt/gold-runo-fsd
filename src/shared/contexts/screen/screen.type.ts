export type ScreenTypes =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "xxxl"
  | null;

export type Screen = {
  currentScreen: ScreenTypes;
};
