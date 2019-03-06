import { Component, OnInit } from '@angular/core';
import { ApiService, AuthService, MessageService } from "../../core";

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.scss']
})
export class AddCategoryFormComponent implements OnInit {

  constructor(private apiService: ApiService,
              private message:MessageService,
  			      private authService: AuthService) {}

  ngOnInit() {
  }

  addCategory(categoryName:string){
    if(categoryName.length){
      this.apiService.addCategory({ name: categoryName }, this.authService.getUserUID).then(()=>{
        this.message.messageSuccess("Категория добавлена!");
      }).catch((err)=>{
        this.message.messageError(err);
      });
    }
  }
}
