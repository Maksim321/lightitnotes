import { Component, OnInit, Input, Inject } from '@angular/core';
import { ApiService, AuthService, ObservablesService, NoteFormService } from "../../core";
import { Observable } from 'rxjs';
import { Note, Label } from '../../core';
import { Colors } from '../colors';

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.scss']
})
export class NoteContainerComponent implements OnInit {

  @Input() note:Note;
  colors = new Colors();
  constructor(private apiService: ApiService,
  			  private authService: AuthService,
          private observables: ObservablesService,
          private noteFormService: NoteFormService) { 
  }

  ngOnInit() {
  }

  editNote(): void {
    this.noteFormService.setForm = {
      noteHead: this.note.noteHead,
      noteBody: this.note.noteBody,
      noteColor: this.note.noteColor,
      uidCategories: this.note.uidCategories,
      labels: this.note.labels    
    }
    this.noteFormService.isActive = true;
    this.noteFormService.setNote = this.note;
    this.noteFormService.setEditStatus = true;
  }

  deleteLabel(labelDel){
    this.apiService.deleteLabelFromNote(this.authService.getUserUID, this.note.uidNote, 
      this.note.labels.filter(label=>  { return label !== labelDel }));
  }

  deleteNote(){
  	this.apiService.deleteNote(this.authService.getUserUID, this.note.uidNote);
  }

}
