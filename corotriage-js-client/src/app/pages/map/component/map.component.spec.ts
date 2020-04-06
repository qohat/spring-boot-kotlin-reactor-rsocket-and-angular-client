import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import {of} from 'rxjs';
import {filter, map} from 'rxjs/operators';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const data = 2;
    const obs = [of(1), of(3), of(4), of(5)]
      .map( t => t.pipe(
          map( _ => _ === data ? _ = data : console.log('testing obs'))
        )
      );
    console.log(obs);
    expect(component).toBeTruthy();
  });
});
