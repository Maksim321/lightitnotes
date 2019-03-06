import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from "../services/api.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Note, NoteForm } from '../models';

@Injectable()
export class NoteFormService {
  private isEditMode:boolean = false;
  private note: Note;
  isActive:boolean = false;
  noteForm = new FormGroup({
  	noteHead: new FormControl(''),
  	noteBody: new FormControl('', [Validators.required]),
  	noteColor: new FormControl('', [Validators.required]),
  	uidCategories: new FormControl('', [Validators.required]),
    labels: new FormControl('')
  });

  constructor(private apiService: ApiService) { 
  }

  get getEditStatus():boolean {
    return this.isEditMode;
  }

  get getForm():FormGroup {
    return this.noteForm;
  }

  get getValueForm():NoteForm {
    return this.noteForm.value;
  }

  get getNote():Note {
    return this.note;
  }  

  set setNote(note:Note) {
    this.note = note;
  } 

  set setEditStatus(editMode:boolean) {
    this.isEditMode = editMode;
  }

  set setForm(value:NoteForm) {
    this.noteForm.setValue(value);
  }

  resetForm() {
    this.isActive = false;
    this.noteForm.reset();
    this.note = null;
    this.isEditMode = false;
  }
}
