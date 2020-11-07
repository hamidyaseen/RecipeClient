import { DoseBaseContent } from "./DoseBaseContents";

export interface DoseContent {
  label: string;
  tag: string;
  schemaOrgTag: string;
  total: number;
  hasRDI: boolean;
  daily: number,
  unit: string,
  sub: DoseBaseContent[];
}
