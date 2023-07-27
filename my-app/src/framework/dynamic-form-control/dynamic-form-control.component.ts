// dynamic-form-control.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseControl } from '../controls/base-control';
import { ControlTypeEnum } from '../controls/control-type.enum';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
})
export class DynamicFormControlComponent implements OnInit {

  @Input() form!: FormGroup; // Accept dynamicForm as input
  @Input() control!: BaseControl<string>;
  @Input() controls !: BaseControl<string>[];

  isAssociatedInputBoxVisible: boolean = false;

  ngOnInit(): void {
    this.rehydrate();
  }

  get isValid() {
    const formControl = this.form.get(this.control.key);
    (formControl as any).myControl = this.control;
    return formControl?.valid || false;
  }

  onRadioButtonChanged(event: any): void {
    const associatedControlKeys = this.control.associatedControlKeys || [];
    this.setVisibilityOfAssociateControl(associatedControlKeys, (event.value == "no"));
  }

  private setVisibilityOfAssociateControl(associatedControlKeys: string[], val: boolean) {
    associatedControlKeys.map(key => {
      const control = this.controls.find(x => x.key === key);
      if (control == undefined) return;

      control.isHidden = val;
    });
  }

  rehydrate() { 
    this.executeRadioButtonRendering();
  }

  executeRadioButtonRendering() {
    this.controls.map(control => {
      if (control.controlType === ControlTypeEnum.radio) {
        const associatedControlKeys = control.associatedControlKeys || [];
        this.setVisibilityOfAssociateControl(associatedControlKeys, control.value === "no");
      }
    });
  }

}
