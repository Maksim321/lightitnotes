import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService, ObservablesService } from "../core";
import { Note, Label } from "../core";

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent implements OnInit  {
  screenHeight:any;
  screenWidth:any;
  constructor(private authService: AuthService,
  			      private observables: ObservablesService) { 
  	this.getScreenSize();
  }

  ngOnInit() {
    this.observables.getNotes(this.authService.getUserUID);
  	this.observables.getCategories(this.authService.getUserUID);
    this.observables.getLabels(this.authService.getUserUID);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
	this.screenHeight = window.innerHeight;
	this.screenWidth = window.innerWidth;
  } 
}
