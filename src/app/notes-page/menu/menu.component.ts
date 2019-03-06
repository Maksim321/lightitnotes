import { Component, OnInit } from '@angular/core';
import { ApiService, AuthService, ObservablesService } from "../../core";

import { Category, Label } from '../../core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  selectedCategory:string;

  constructor(private apiService: ApiService,
  			      private authService: AuthService,
              private observables: ObservablesService) { }

  ngOnInit() {
  }

  selectCategory(uidCategory){
    this.selectedCategory = uidCategory;
    this.observables.setCategoryUid = uidCategory;
    this.observables.getNotesC(this.authService.getUserUID, uidCategory);
  }
}
