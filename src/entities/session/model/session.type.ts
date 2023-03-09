import { User } from "@/shared/api/internal";

export type InitialState = {
  user: User | null;
  isLoading: boolean;
  isAuthed: boolean;
  isFetched: boolean;
};
