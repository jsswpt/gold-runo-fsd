import { ProductT } from "@/shared/api/internal";

export interface CurrentSet extends ProductT {}

export type InitialState = {
  isLoading: boolean;
  setsForChoose: ProductT[];
  setsList: ProductT[];
  currentSet: CurrentSet | null;
};
