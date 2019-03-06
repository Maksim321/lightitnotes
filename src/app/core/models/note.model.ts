import { Label } from './label.model';

export interface Note { 
  noteHead: string;
  noteBody: string;
  noteColor: string;
  uidCategories: string[];
  labels: Label[];
  uidNote: string;
}