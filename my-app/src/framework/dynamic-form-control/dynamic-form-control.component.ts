// dynamic-form-control.component.ts
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseControl } from '../controls/base-control';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
})
export class DynamicFormControlComponent {
  @Input() form!: FormGroup; // Accept dynamicForm as input
  @Input() control!: BaseControl<string>;
  @Input() controls !: BaseControl<string>[];

  isAssociatedInputBoxVisible: boolean = false;

  get isValid() {
    const formControl = this.form.get(this.control.key);
    (formControl as any).myControl = this.control;
    return formControl?.valid || false;
  }

  onRadioButtonChanged(event: any): void {
    let val = (event.value == "no");
    const associatedControlKeys = this.control.associatedControlKeys || [];
    associatedControlKeys.map(key => {
      const control = this.controls.find(x => x.key === key);
      if (control == undefined) return;

      control.isHidden = val;
    });
  }

}
