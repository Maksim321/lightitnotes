import { NgModule } from '@angular/core';

import {
  AuthService,
  ApiService,
  ObservablesService,
  MessageService,
  NoteFormService
} from './services';


@NgModule({
  imports: [
  ],
  providers: [
    AuthService,
    ApiService,
    ObservablesService,
    MessageService,
    NoteFormService
  ],
  declarations: []
})
export class CoreModule { }
