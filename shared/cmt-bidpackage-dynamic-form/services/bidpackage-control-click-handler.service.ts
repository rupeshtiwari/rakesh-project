import { BidPackageFormUiControl } from '../dto/bidpackage-form-ui-control.dto';
import { BidPackageFormUiState } from '../models/bidpackage-form-ui.state';



export class BidPackageControlClickHandlerService {
    constructor(public state: BidPackageFormUiState) { }
    onControlClick(control: BidPackageFormUiControl) {
        control.controlType 
    }
}

