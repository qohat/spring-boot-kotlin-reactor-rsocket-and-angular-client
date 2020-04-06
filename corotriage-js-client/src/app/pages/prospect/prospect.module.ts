import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ProspectComponent } from './component/prospect.component';
import { ProspectRoutingModule } from './prospect-routing.module';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatStepperModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ProspectComponent
    ],
  imports: [
    CommonModule,
    ProspectRoutingModule,
    MatStepperModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ],
    providers: [],
    bootstrap: [],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class ProspectModule { }
