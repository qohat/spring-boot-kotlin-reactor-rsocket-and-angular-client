import { Injectable } from '@angular/core';
import { RSocketService } from 'src/app/core/service/rsocket.service';

export interface Message {
  author: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private readonly rsocketService: RSocketService) {
  }
}
