import { ControlTypeEnum } from './control-type.enum';
import { BaseControl } from './base-control';

export class SectionHeaderControl extends BaseControl<string> {
    override controlType = ControlTypeEnum.sectionheader;
}
