// Import required modules and services
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseControl } from '../framework/controls/base-control';
import { BidPackageApi } from '../apis/bidpackage.api';

@Injectable({
  providedIn: 'root',
})
export class GetBidPackageControlService {


  constructor(private api: BidPackageApi) { }

  getBidPackageControls(): Observable<BaseControl<string>[]> {
    const data$ = this.api.fetchData().pipe(map(data => {
      // if (ke ==) { data.value =id} update workid 
      return data.sort((a: BaseControl<string>, b: BaseControl<string>) => a.order - b.order);
    }));

    return data$;
  }
}
