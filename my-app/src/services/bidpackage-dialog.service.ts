// bidpackage-dialog.service.ts
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { GetBidPackageFormGroupService } from './get-bidpackage-formgroup.service';
import { BidPackageDialogComponent } from '../app/components/bid-package-dialog/bid-package-dialog.component';

@Injectable({
    providedIn: 'root',
})
export class BidPackageDialogService {
    constructor(
        private dialog: MatDialog,
        private getBidPackageFormGroupService: GetBidPackageFormGroupService,

    ) { }

    openDialogWithData(): void {
        this.getBidPackageFormGroupService.getFormGroup().subscribe((formGroup) => {

            const dialogRef = this.dialog.open(BidPackageDialogComponent, {
                disableClose: true,
                width: '600px',
                data: [formGroup, this.getBidPackageFormGroupService.controls],
            });

            dialogRef.afterClosed().subscribe((result) => {
                // Handle any actions after the dialog is closed if needed
                console.log('Dialog closed with result:', result);
            });
        });
    }
}
