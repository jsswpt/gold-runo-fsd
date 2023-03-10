import { ProductT } from "@/shared/api/internal";

export type SearchResult = {
  query: string;
  id: string;
  list: ProductT[];
};

export type InitialState = {
  isLoading: boolean;
  cachedResponses: Array<SearchResult>;
  currentList: SearchResult | null;
  isFetched: boolean;
};

export type PreSearchThunkProps = {
  query: string;
};

export type SetCurrentListProps = {
  query: string;
  list: ProductT[];
};
