import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from "./core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService,
  			  private router: Router){};

  ngOnInit() {
  	this.authService.currentUserObservable.subscribe((auth)=> {
  	  if(auth){
  	  	this.authService.authState = auth;
        this.router.navigate(["notes"]);
  	  }
  	});  	
  }
}
