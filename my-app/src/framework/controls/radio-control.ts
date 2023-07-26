import { ControlTypeEnum } from './control-type.enum';
import { BaseControl } from './base-control';

export class RadioControl extends BaseControl<string> {
  override controlType = ControlTypeEnum.radio;
}
