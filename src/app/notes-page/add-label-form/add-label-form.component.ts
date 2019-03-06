import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService, AuthService, MessageService } from "../../core";
import { Colors } from '../colors';

@Component({
  selector: 'app-add-label-form',
  templateUrl: './add-label-form.component.html',
  styleUrls: ['./add-label-form.component.scss']
})
export class AddLabelFormComponent implements OnInit {

  labelForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required])
  });
  colors = new Colors();

  constructor(private apiService: ApiService,
  			      private authService: AuthService,
              private message:MessageService) {}

  ngOnInit() {
  }

  addLabel(categoryName){
  	this.apiService.addLabel(this.labelForm.value, this.authService.getUserUID).then(()=>{
      this.message.messageSuccess("Ярлык добавлен!");
    }).catch((err)=>{
      this.message.messageError(err);
    });
  }
}
