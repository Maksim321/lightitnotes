import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, ObservablesService } from "../../core";
import { Note } from "../../core";

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {
  constructor(private authService: AuthService,
  			  private observables: ObservablesService) {}

  ngOnInit() {
  } 
}
