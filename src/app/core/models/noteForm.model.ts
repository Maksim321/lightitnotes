import { Label } from './label.model';

export interface NoteForm { 
  noteHead: string;
  noteBody: string;
  noteColor: string;
  uidCategories: string[];
  labels: Label[];
}