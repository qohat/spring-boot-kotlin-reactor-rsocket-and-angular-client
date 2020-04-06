import { Component, OnInit, ViewChild } from '@angular/core';
import { GeolocationService } from 'src/app/pages/map/http/geolocation.service';
import { RSocketService } from 'src/app/core/service/rsocket.service';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';
import {ProspectLocation} from '../../../core/dto/prospect-location';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'ct-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;

  title = 'Prueba';

  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 15,
    minZoom: 8,
    zoom: 15,
    center: this.center
  };

  locations: Observable<ProspectLocation[]>;

  locations1: Observable<ProspectLocation>[] = [];

  markerOptions: google.maps.MarkerOptions[] = [];

  markerPositions: google.maps.LatLngLiteral[] = [];

  display?: google.maps.LatLngLiteral;

  constructor( private readonly rsocketService: RSocketService) {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.markerOptions.push(// center
        {
          position: this.center,
          icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        });
    });
    const loc = [];
    this.rsocketService.create().subscribe({
      onComplete: socket => {
        // socket provides the rsocket interactions fire/forget, request/response,
        // request/stream, etc as well as methods to close the socket.
        socket.requestStream({
          data: {
            id: 'ff3548f7-3192-4454-bef8-af9bbfbe84ba'
          },
          metadata: String.fromCharCode('locations'.length) + 'locations',
        }).subscribe({
          onComplete: () => console.log('onComplete', new Date()),
          onError: error =>  console.log(error),
          onNext: payload => {
            const data = payload.data as ProspectLocation;
            console.log('onNext', new Date());
          },
          onSubscribe: subscription => {
            console.log('subscribe stream', new Date());
            subscription.request(2147483647);
          },
        });
      },
      onError: error => console.log(error),
      onSubscribe: cancel => console.log(cancel, new Date())
    });
  }

  addMarkerOption(position: ProspectLocation) {
    console.log('Changing position');

    // this.markerOptions.push({ position: {}})
  }

  addMarker(event: google.maps.MouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }

  move(event: google.maps.MouseEvent) {
    this.display = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  removeLastMarker() {
    this.markerPositions.pop();
  }

}
