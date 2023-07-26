import { ControlTypeEnum } from './control-type.enum';
import { BaseControl } from './base-control';

export class TextboxControl extends BaseControl<string> {
    override controlType = ControlTypeEnum.text;
}
