import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

import { BaseControl } from '../../../framework/controls/base-control';
import { BidPackageSubmitService } from '../../../services/bidpackage-submit.service';


@Component({
  selector: 'app-bid-package-dialog',
  templateUrl: './bid-package-dialog.component.html',
  styleUrls: ['./bid-package-dialog.component.sass']
})
export class BidPackageDialogComponent {
  dynamicForm: FormGroup;
  controls: BaseControl<string>[];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: [FormGroup, BaseControl<string>[]],
    public dialogRef: MatDialogRef<BidPackageDialogComponent>,
    private submitPayloadService : BidPackageSubmitService,
  ) {
    this.dynamicForm = data[0];
    this.controls = data[1];
  }

  onSubmit() {
    // Handle form submission if needed
    console.log('Form submitted!');
    // Close the dialog after form submission (optional)

    this.submitPayloadService.submit(this.dynamicForm.value, this.controls);

    console.log(this.dynamicForm.value);

   // this.dialogRef.close();
  }
}
