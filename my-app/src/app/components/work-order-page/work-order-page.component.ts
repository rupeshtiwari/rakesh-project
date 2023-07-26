// workorder.component.ts
import { Component } from '@angular/core';
import { BidPackageDialogService } from '../../../services/bidpackage-dialog.service';

@Component({
  selector: 'app-workorder',
  templateUrl: './work-order-page.component.html',
})
export class WorkOrderPageComponent {
  constructor(private bidPackageDialogService: BidPackageDialogService) { }

  openBidPackageDialog() {
    this.bidPackageDialogService.openDialogWithData();
  }
}
