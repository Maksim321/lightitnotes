import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../core/material.module';
import { NotesPageRoutingModule } from './notes-page-routing.module';

import { NotesPageComponent } from './notes-page.component';
import { MenuComponent } from './menu/menu.component';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { NoteContainerComponent } from './note-container/note-container.component';
import { CreateNoteModule } from './create-note-form/create-note-form.module';
import { AddCategoryFormComponent } from './add-category-form/add-category-form.component';
import { AddLabelFormComponent } from './add-label-form/add-label-form.component';
import { LabelsContainerComponent } from './labels-container/labels-container.component';

@NgModule({
  imports: [
    CommonModule,
    NotesPageRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    CreateNoteModule
  ],
  declarations: [
    NotesPageComponent,
    MenuComponent,
    NotesContainerComponent,
    NoteContainerComponent,
    AddCategoryFormComponent,
    AddLabelFormComponent,
    LabelsContainerComponent,
  ],
  providers: []
})
export class NotesPageModule { }
