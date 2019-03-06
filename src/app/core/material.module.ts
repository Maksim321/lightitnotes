import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule, MatToolbarModule, 
  MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatCheckboxModule, MatSidenavModule, MatSelectModule,
  MatButtonToggleModule, MatRadioModule, MatListModule, MatProgressBarModule, MatChipsModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatListModule,
    MatProgressBarModule,
    MatChipsModule,
    MatSnackBarModule
  ],
  exports: [
   CommonModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatCheckboxModule,
   MatSidenavModule,
   MatSelectModule,
   MatButtonToggleModule,
   MatRadioModule,
   MatListModule,
   MatProgressBarModule,
   MatChipsModule,
   MatSnackBarModule
  ],
})
export class MaterialModule { }
