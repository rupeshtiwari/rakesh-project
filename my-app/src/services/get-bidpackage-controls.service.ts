// Import required modules and services
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RadioControl } from '../framework/controls/radio-control';
import { TextboxControl } from '../framework/controls/text-control';
import { BaseControl } from '../framework/controls/base-control';
import { ControlTypeEnum } from '../framework/controls/control-type.enum';

@Injectable({
  providedIn: 'root',
})
export class GetBidPackageControlService {
  // API endpoint URL
  private apiUrl = 'https://your-server-url.com/api/bidpackages';

  constructor(private http: HttpClient) { }

  getBidPackageControls(): Observable<BaseControl<string>[]> {
    // get json from backend

    // json = api.fetchData() //http

    return of([
      new TextboxControl({
        key: 'workOrderId',
        label: 'Work Order ID',
        order: 1,
      }),
      new RadioControl({
        key: 'beamNeeded',
        label: 'Beam Needed',
        associatedControlKeys: ['weightOfBeam'],
        order: 2,
        options: [
          { key: 'yes', value: 'Yes' },
          { key: 'no', value: 'No' },
        ],
      }),

      new TextboxControl({
        key: 'weightOfBeam',
        label: 'Weight of Beam',
        isHidden: true,
        order: 3,
      }),
    ]);
  }
}
