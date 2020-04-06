import {ValueObject} from './value-object';

export class ProspectLocation {
  constructor(
    public prospectId: ValueObject,
    public prospectLocationLat: ValueObject,
    public prospectLocationLng: ValueObject
  ) {
  }
}
