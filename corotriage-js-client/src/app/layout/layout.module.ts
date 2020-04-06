import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material';

@NgModule({
    declarations: [
    ],
    imports: [
      CommonModule,
      RouterModule
    ],
    providers: [],
    bootstrap: [],
    exports: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class LayoutModule { }
