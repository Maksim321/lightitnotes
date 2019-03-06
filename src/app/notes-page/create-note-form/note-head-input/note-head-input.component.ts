import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-note-head-input',
  templateUrl: './note-head-input.component.html',
  styleUrls: ['../create-note-form.component.scss']
})
export class NoteHeadInputComponent implements OnInit {

  @Input() parentGroup: FormGroup;
  constructor() {}

  ngOnInit() {
  }
}
