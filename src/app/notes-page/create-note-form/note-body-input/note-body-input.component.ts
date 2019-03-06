import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-note-body-input',
  templateUrl: './note-body-input.component.html',
  styleUrls: ['../create-note-form.component.scss']
})
export class NoteBodyInputComponent implements OnInit {

  @Input() parentGroup: FormGroup;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  constructor() {}

  ngOnInit() {
  }
}
