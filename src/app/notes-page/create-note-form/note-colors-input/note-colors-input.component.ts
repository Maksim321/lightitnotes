import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Colors } from '../../colors';


@Component({
  selector: 'app-note-colors-input',
  templateUrl: './note-colors-input.component.html',
  styleUrls: ['../create-note-form.component.scss']
})
export class NoteColorsInputComponent implements OnInit {

  @Input() parentGroup: FormGroup;

  colors = new Colors();
  constructor() {}

  ngOnInit() {
  }
}
