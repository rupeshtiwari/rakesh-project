import { ControlTypeEnum } from './control-type.enum';
import { BaseControl } from './base-control';

export class SelectControl extends BaseControl<string> {
  override controlType = ControlTypeEnum.select;
}
