import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-note-categories-input',
  templateUrl: './note-categories-input.component.html',
  styleUrls: ['../create-note-form.component.scss']
})
export class NoteCategoriesInputComponent implements OnInit {

  @Input() parentGroup: FormGroup;
  @Input() categories$: Observable<any>;
  constructor() {}

  ngOnInit() {
  }
}
