import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Label } from '../../../core';


@Component({
  selector: 'app-note-labels-container',
  templateUrl: './note-labels-container.component.html',
  styleUrls: ['../create-note-form.component.scss']
})
export class NoteLabelsContainerComponent implements OnInit {

  @Input() labels: Label[];

  constructor() {}

  ngOnInit() {
  }
}
