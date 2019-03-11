import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService, AuthService, ObservablesService } from "../../core";

import { Category, Note } from '../../core';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss']
})
export class MenumContainerComponent implements OnInit, OnDestroy {

  selectedCategory:string = '';
  notes:Note[];
  sybNotes;

  constructor(private apiService: ApiService,
  			      private authService: AuthService,
              private observables: ObservablesService) { }

  ngOnInit() {
    this.sybNotes = this.observables.getNotes$.subscribe(notes=>{
      this.notes = notes;
    });
  }

  selectCategory(uidCategory){
    this.selectedCategory = uidCategory;
    this.observables.getNotesC(this.authService.getUserUID, uidCategory);
  }

  selectAllCategory(){
    this.selectedCategory = '';
    this.observables.getNotes(this.authService.getUserUID);
  }

  deleteCategory(uidCategoryDel){
    this.apiService.deleteCategory(this.authService.getUserUID, uidCategoryDel);
    this.deleteCategoryFromNotes(uidCategoryDel);
    
  }

  deleteCategoryFromNotes(uidCategoryDel){
    this.notes.forEach(note=>{
      if(note.uidCategories && note.uidCategories.find(uidCategory => uidCategory === uidCategoryDel) !== undefined){
        this.apiService.deleteCategoryFromNote(
          this.authService.getUserUID, 
          note.uidNote, 
          note.uidCategories.filter(uidCategory=>  { return uidCategory !== uidCategoryDel }));
      }
    });
  }

  ngOnDestroy() {
    this.sybNotes.unsubscribe();
  }
}
