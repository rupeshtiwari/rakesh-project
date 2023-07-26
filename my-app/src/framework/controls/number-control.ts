import { ControlTypeEnum } from './control-type.enum';
import { BaseControl } from './base-control';

export class NumberboxControl extends BaseControl<number> {
  override controlType = ControlTypeEnum.number;
}
