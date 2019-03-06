import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../core/material.module';

import { CreateNoteFormComponent } from './create-note-form.component';
import { NoteHeadInputComponent } from './note-head-input/note-head-input.component';
import { NoteBodyInputComponent } from './note-body-input/note-body-input.component';
import { NoteCategoriesInputComponent } from './note-categories-input/note-categories-input.component';
import { NoteColorsInputComponent } from './note-colors-input/note-colors-input.component';
import { NoteLabelsInputComponent } from './note-labels-input/note-labels-input.component';


@NgModule({
  imports: [
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
  	CreateNoteFormComponent,
    NoteHeadInputComponent,
    NoteBodyInputComponent,
    NoteCategoriesInputComponent,
    NoteColorsInputComponent,
    NoteLabelsInputComponent
  ],
  providers: [],
  exports: [CreateNoteFormComponent]
})
export class CreateNoteModule { }
