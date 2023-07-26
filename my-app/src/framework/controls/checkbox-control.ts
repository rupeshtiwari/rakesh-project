import { ControlTypeEnum } from './control-type.enum';
import { BaseControl } from './base-control';

export class CheckboxControl extends BaseControl<boolean> {
  override controlType = ControlTypeEnum.checkbox;
}
