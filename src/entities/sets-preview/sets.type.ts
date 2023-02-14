import { ProductVariantT } from "@/shared/api/internal";

export interface CurrentSet extends ProductVariantT {}

export type InitialState = {
  isLoading: boolean;
  setsForChoose: ProductVariantT[];
  setsList: ProductVariantT[];
  currentSet: CurrentSet | null;
};
