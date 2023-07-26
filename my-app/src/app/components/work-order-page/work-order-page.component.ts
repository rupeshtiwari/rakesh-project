// work-order.component.ts
import { Component } from '@angular/core';
import { BidPackageDialogService } from '../../../services/bidpackage-dialog.service';
 

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.css'],
})
export class WorkOrderComponent {
  constructor(private bidPackageDialogService: BidPackageDialogService) { }

  openBidPackageDialog(): void {
    this.bidPackageDialogService.openDialog();
  }
}
