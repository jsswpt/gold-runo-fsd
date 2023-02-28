export type SelectItemBaseT = { value: any; title: string };

export interface SelectItemT extends SelectItemBaseT {
  active: boolean;
  onClick: () => void;
}

export type SelectT = {
  fullWidth?: boolean;
  options: SelectItemBaseT[];
  onSelect: (value: any) => void;
};
