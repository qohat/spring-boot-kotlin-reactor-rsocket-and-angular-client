import { Injectable } from '@angular/core';
const { RSocketClient, JsonSerializer, IdentitySerializer } = require('rsocket-core');
const RSocketWebSocketClient = require('rsocket-websocket-client').default;

@Injectable({
  providedIn: 'root'
})
export class RSocketService {

  client = undefined;

  constructor() {
    if (this.client !== undefined) {
      this.client.close();
    }
  }

  create() {
    return new RSocketClient({
      serializers: {
        data: JsonSerializer,
        metadata: IdentitySerializer
      },
      setup: {
        // ms btw sending keepalive to server
        keepAlive: 60000,
        // ms timeout if no keepalive response
        lifetime: 180000,
        // format of `data`
        dataMimeType: 'application/json',
        // format of `metadata`
        metadataMimeType: 'message/x.rsocket.routing.v0',
      },
      transport: new RSocketWebSocketClient({
        url: 'ws://localhost:8080/rsocket'
      }),
    }).connect();
  }

}
