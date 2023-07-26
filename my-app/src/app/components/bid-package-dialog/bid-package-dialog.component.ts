import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

import { BaseControl } from '../../../framework/controls/base-control';


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
    public dialogRef: MatDialogRef<BidPackageDialogComponent>
  ) {
    this.dynamicForm = data[0];
    this.controls = data[1];
  }

  onSubmit() {
    // Handle form submission if needed
    console.log('Form submitted!');
    // Close the dialog after form submission (optional)

    console.log(this.dynamicForm.value);

   // this.dialogRef.close();
  }
}
