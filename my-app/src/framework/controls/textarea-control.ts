import { ControlTypeEnum } from './control-type.enum';
import { BaseControl } from './base-control';

export class TextareaControl extends BaseControl<string> {
  override controlType = ControlTypeEnum.textarea;
}
