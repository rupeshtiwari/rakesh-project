// Import required modules and services
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseControl } from '../framework/controls/base-control';
import { BidPackageApi } from '../apis/bidpackage.api';

@Injectable({
    providedIn: 'root',
})
export class BidPackageSubmitService {


    constructor() { }

    submit(paylod: any, controls: BaseControl<string>[]) {

        controls.map(control => {
            control.value = paylod[control.key];
        });

        console.log("PAYLOAD sending to server", JSON.stringify( controls ));
    }
}
