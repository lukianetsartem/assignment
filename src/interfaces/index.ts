export interface Option {
  label: string;
  value: number;
}

export type Options = Option[];

export interface Mode {
  id: string;
  name: string;
  field: number;
}

export type Modes = Mode[];
