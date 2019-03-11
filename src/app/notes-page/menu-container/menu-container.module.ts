import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../core/material.module';

import { MenumContainerComponent } from './menu-container.component';
import { AddCategoryFormComponent } from './add-category-form/add-category-form.component';
import { AddLabelFormComponent } from './add-label-form/add-label-form.component';
import { LabelsContainerComponent } from './labels-container/labels-container.component';


@NgModule({
  imports: [
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
  	MenumContainerComponent,
    AddCategoryFormComponent,
    AddLabelFormComponent,
    LabelsContainerComponent
  ],
  providers: [],
  exports: [MenumContainerComponent]
})
export class MenumContainerModule { }
