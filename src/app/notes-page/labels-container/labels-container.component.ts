import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService, AuthService, ObservablesService } from "../../core";
import { Label } from "../../core";
import { Colors } from '../colors';

@Component({
  selector: 'app-labels-container',
  templateUrl: './labels-container.component.html',
  styleUrls: ['./labels-container.component.scss']
})
export class LabelsContainerComponent implements OnInit {

  colors = new Colors();

  constructor(private apiService: ApiService,
  			  private authService: AuthService,
  			  private observables: ObservablesService) {}

  ngOnInit() {
  }

  removeLabel(label){
  	console.log(label);
  	this.apiService.deleteLabel(this.authService.getUserUID, label.uidLabel)
  }
}
