import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Label } from '../../../core';


@Component({
  selector: 'app-note-labels-input',
  templateUrl: './note-labels-input.component.html',
  styleUrls: ['../create-note-form.component.scss']
})
export class NoteLabelsInputComponent implements OnInit {

  @Input() parentGroup: FormGroup;
  @Input() labels$: Observable<any>

  constructor() {}

  ngOnInit() {
  }
}
