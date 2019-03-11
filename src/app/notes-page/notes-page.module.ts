import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../core/material.module';
import { NotesPageRoutingModule } from './notes-page-routing.module';

import { NotesPageComponent } from './notes-page.component';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { NoteContainerComponent } from './note-container/note-container.component';
import { CreateNoteModule } from './create-note-form/create-note-form.module';
import { MenumContainerModule } from './menu-container/menu-container.module';

@NgModule({
  imports: [
    CommonModule,
    NotesPageRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    CreateNoteModule,
    MenumContainerModule
  ],
  declarations: [
    NotesPageComponent,
    NotesContainerComponent,
    NoteContainerComponent
  ],
  providers: []
})
export class NotesPageModule { }
