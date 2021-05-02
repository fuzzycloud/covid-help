export type SelectOption = {
  value: string;
  label: string;
};

export const strToOption = (s: string) =>
  ({ value: s, label: s } as SelectOption);
