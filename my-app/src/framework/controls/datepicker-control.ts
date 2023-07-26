import { ControlTypeEnum } from './control-type.enum';
import { BaseControl } from './base-control';

export class DatepickerControl extends BaseControl<string> {
  override controlType = ControlTypeEnum.datepicker;
}
