import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {MapComponent} from '../map/component/map.component';
import {MapRoutingModule} from './map-routing.module';
import {GoogleMapsModule} from '@angular/google-maps';

@NgModule({
    declarations: [
        MapComponent
    ],
    imports: [
      CommonModule,
      MapRoutingModule,
      GoogleMapsModule
    ],
    providers: [],
    bootstrap: [],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class MapModule { }
