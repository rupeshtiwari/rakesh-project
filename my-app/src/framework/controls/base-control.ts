// base-control.ts

import { ControlTypeEnum } from './control-type.enum';

export class BaseControl<T> {
    value: T | undefined;
    key: string;
    associatedControlKeys?: string[]; // New property for the associated control key
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    options: { key: string; value: string; }[];
    styles: { isVisible: boolean; };
    isHidden?: boolean;

    constructor(options: {
        value?: T;
        key?: string;
        associatedControlKeys?: string[]; // New property in the constructor
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        options?: { key: string; value: string; }[];
        styles?: { isVisible: boolean; };
        isHidden?: boolean;

    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.associatedControlKeys = options.associatedControlKeys || [];
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || ControlTypeEnum.text;
        this.type = options.type || '';
        this.options = options.options || [];
        this.styles = { isVisible: true, };
        this.isHidden = options.isHidden;
    }
}
