export type User = {
  additional_phone: string | null;
  bank_name: string | number | null;
  bic: number | null;
  bonuses: number;
  calculated_account: number | null;
  correspondent_account: number | null;
  email: string;
  is_email_verified: boolean;
  group_id: number | null;
  id: number;
  inn: number | null;
  is_subscribed_to_news: boolean;
  jural_address: string | null;
  kind: UserKind;
  name: string;
  ogrn: number | null;
  phone: string | null;
  unloading_address: string | null;
};

export type UserKind = "single" | "organization";
