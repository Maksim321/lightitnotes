import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService, AuthService, MessageService, ObservablesService } from "../../core";
import { Colors } from '../colors';
import { Label } from "../../core";

@Component({
  selector: 'app-add-label-form',
  templateUrl: './add-label-form.component.html',
  styleUrls: ['./add-label-form.component.scss']
})
export class AddLabelFormComponent implements OnInit, OnDestroy {

  labelForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required])
  });
  colors = new Colors();
  labels:Label[];
  sybLabels;
  constructor(private apiService: ApiService,
  			      private authService: AuthService,
              private message:MessageService,
              private observables: ObservablesService) {}

  ngOnInit() {
    this.sybLabels = this.observables.getLabels$.subscribe(labels=>{
      this.labels = labels;
    });
  }

  addLabel(){
    if(!this.isDuplicate()){
      this.apiService.addLabel(this.labelForm.value, this.authService.getUserUID).then(()=>{
        this.message.messageSuccess("Ярлык добавлен!");
      }).catch((err)=>{
        this.message.messageError(err);
      });
    } else {
      this.message.messageError("Зачем вам две одинаковые?");
    }
  }

  isDuplicate():boolean{
    return this.labels.find(x => x.name === this.labelForm.value.name && 
      x.color === this.labelForm.value.color) !== undefined;
  }

  ngOnDestroy() {
    this.sybLabels.unsubscribe();
  }  
}
