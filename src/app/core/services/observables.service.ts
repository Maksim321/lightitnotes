import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from "./api.service";
import { Category, Note, Label } from '../models';

@Injectable()
export class ObservablesService {

  private categoryUID:string;
  private categories$:Observable<Category[]>;
  private notes$:Observable<Note[]>;
  private labels$:Observable<Label[]>;

  constructor(private apiService: ApiService) {}

  get getCategories$():Observable<Category[]> {
    return this.categories$;
  }

  get getNotes$():Observable<Note[]> {
    return this.notes$;
  }

  get getLabels$():Observable<Label[]> {
    return this.labels$;
  }    

  get getCategoryUid():string {
    return this.categoryUID;
  }

  set setCategoryUid(value: string) {
	  this.categoryUID = value;
  }

  getCategories(uidUser:string){
    this.categories$ = this.apiService.getCategories(uidUser);   
  }

  getNotes(uidUser:string){
    this.notes$ = this.apiService.getNotes(uidUser);   
  }

  getNotesC(uidUser:string, uidCategory:string){
    this.notes$ = this.apiService.getNotesC(uidUser, uidCategory);   
  }

  getNotesLabels(uidUser:string, label:Label){
    this.notes$ = this.apiService.getNotesLabels(uidUser, label);   
  }

  getLabels(uidUser:string){
    this.labels$ = this.apiService.getLabels(uidUser);   
  }     
}
