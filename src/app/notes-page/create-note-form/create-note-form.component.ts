import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, ApiService, ObservablesService, 
  NoteFormService, MessageService } from "../../core";

import { Category, Note, Label } from '../../core';
import { Colors } from '../colors';

@Component({
  selector: 'app-create-note-form',
  templateUrl: './create-note-form.component.html',
  styleUrls: ['./create-note-form.component.scss']
})
export class CreateNoteFormComponent implements OnInit {

  showSpinner:boolean = false;

  colors = new Colors();
  constructor(private apiService: ApiService,
  			      private authService: AuthService,
  			      private observables: ObservablesService,
              private noteFormService: NoteFormService,
              private message:MessageService) { }

  ngOnInit() {
  }

  closedForm(){
    this.noteFormService.isActive = false;
    this.noteFormService.resetForm();
  }

  sendNote(){
    this.showSpinner = true;
    if(this.noteFormService.getEditStatus){
      this.updateNote();     
    } else{
    	this.addNote();
    }
  }

  addNote(){
    this.apiService.addNote(this.noteFormService.getValueForm, this.authService.getUserUID).then(()=>{
      this.showSpinner = false;
      this.message.messageSuccess("Заметка добавлена!");
      this.noteFormService.resetForm();
    }).catch((err)=>{
      this.showSpinner = false;
      this.message.messageError(err);
    });      
  }  

  updateNote(){
    this.apiService.updateNote(this.authService.getUserUID,
                               this.noteFormService.getNote.uidNote,
                               this.noteFormService.getValueForm).then(()=>{
      this.showSpinner = false;
      this.message.messageSuccess("Заметка обновлена!");
      this.noteFormService.resetForm();
    }).catch((err)=>{
      this.showSpinner = false;
      this.message.messageError(err);
    });
  }      
}
