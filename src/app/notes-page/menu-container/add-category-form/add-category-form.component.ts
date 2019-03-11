import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService, AuthService, MessageService, ObservablesService } from "../../../core";
import { Category } from "../../../core";

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.scss']
})
export class AddCategoryFormComponent implements OnInit, OnDestroy {

  categories:Category[];
  sybCategories;
  constructor(private apiService: ApiService,
              private message:MessageService,
  			      private authService: AuthService,
              private observables: ObservablesService) {}

  ngOnInit() {
    this.sybCategories = this.observables.getCategories$.subscribe(categories=>{
      this.categories = categories;
    });
  }

  addCategory(categoryName:string){
    if(categoryName.length && !this.isDuplicate(categoryName)){
      this.apiService.addCategory({ name: categoryName }, this.authService.getUserUID).then(()=>{
        this.message.messageSuccess("Категория добавлена!");
      }).catch((err)=>{
        this.message.messageError(err);
      });
    } else {
      this.message.messageError("Значение не должно быть пустым или повторятся!");
    }
  }

  isDuplicate(categoryName:string):boolean{
    return this.categories.find(x => x.name === categoryName) !== undefined;
  }

  ngOnDestroy() {
    this.sybCategories.unsubscribe();
  }
}
