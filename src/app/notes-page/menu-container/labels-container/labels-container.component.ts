import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService, AuthService, ObservablesService } from "../../../core";
import { Label, Note} from "../../../core";
import { Colors } from '../../colors';

@Component({
  selector: 'app-labels-container',
  templateUrl: './labels-container.component.html',
  styleUrls: ['./labels-container.component.scss']
})
export class LabelsContainerComponent implements OnInit, OnDestroy {

  colors = new Colors();
  notes:Note[];
  sybNotes;

  constructor(private apiService: ApiService,
  			  private authService: AuthService,
  			  private observables: ObservablesService) {}

  ngOnInit() {
    this.sybNotes = this.observables.getNotes$.subscribe(notes=>{
      this.notes = notes;
    });
  }

  deleteLabel(label){
  	this.apiService.deleteLabel(this.authService.getUserUID, label.uidLabel);
    this.deleteLabelFromNotes(label);
  }

  deleteLabelFromNotes(label){
    this.notes.forEach(note=>{
      if(note.labels && note.labels.find(lab => lab.uidLabel === label.uidLabel) !== undefined){
        this.apiService.deleteLabelFromNote(
          this.authService.getUserUID, 
          note.uidNote, 
          note.labels.filter(labelnote=>  { return labelnote.uidLabel !== label.uidLabel }));
      }
    });
  }

  ngOnDestroy() {
    this.sybNotes.unsubscribe();
  }
}
