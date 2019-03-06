import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }   from './auth.guard';

const routes: Routes = [
  { path : '', loadChildren: './auth-page/auth-page.module#AuthPageModule'},
  { path: 'notes', loadChildren: './notes-page/notes-page.module#NotesPageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './auth-page/auth-page.module#AuthPageModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
