// bid-package-dialog.service.ts
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BidPackageDialogComponent } from '../app/components/bid-package-dialog/bid-package-dialog.component';
import { BidPackageApi } from '../apis/bidpackage.api';


@Injectable({
    providedIn: 'root',
})
export class BidPackageDialogService {
    constructor(private dialog: MatDialog, private bidPackageApi: BidPackageApi) { }
 
    openDialogWithData(): void {
        // Make the HTTP call to fetch data using BidPackageApi
        // data = formgroupservice.getdatat();
        // dialogopen(data)
    }
}
