import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../core/material.module';
import { AuthPageRoutingModule } from './auth-page-routing.module';

import { AuthPageComponent } from './auth-page.component';
import { AuthFormComponent } from './auth-form/auth-form.component';

@NgModule({
  imports: [
    AuthPageRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    MaterialModule
  ],
  declarations: [
    AuthPageComponent,
    AuthFormComponent
  ],
  providers: []
})
export class AuthPageModule { }
