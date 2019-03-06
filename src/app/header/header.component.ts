import { Component, OnInit } from '@angular/core';
import { AuthService } from "../core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
  		        private router: Router) { }

  ngOnInit() {
  }

  trySignOut(){
  	this.authService.signOut().then(()=>{
      this.router.navigate([""]);
    });
  }

}
