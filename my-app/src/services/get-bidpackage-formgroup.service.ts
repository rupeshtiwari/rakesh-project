// get-bidpackage-formgroup.service.ts
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { BaseControl } from '../framework/controls/base-control';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GetBidPackageControlService } from './get-bidpackage-controls.service';

@Injectable({
    providedIn: 'root',
})
export class GetBidPackageFormGroupService {
    constructor(
        private formBuilder: FormBuilder,
        private getBidPackageControlService: GetBidPackageControlService
    ) { }

    getFormGroup(): Observable<FormGroup> {
        return this.getBidPackageControlService.getBidPackageControls().pipe(
            map((controls: BaseControl<string>[]) => {
                const group: { [key: string]: FormControl; } = {};

                for (const control of controls) {
                    group[control.key] = control.required
                        ? new FormControl(control.value || '', Validators.required)
                        : new FormControl(control.value || '');
                }

                return new FormGroup(group);
            })
        );
    }
}
