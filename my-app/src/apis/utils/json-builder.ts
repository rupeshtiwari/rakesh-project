import { of } from 'rxjs';
import { RadioControl } from '../../framework/controls/radio-control';
import { TextboxControl } from '../../framework/controls/text-control';
import { SectionHeaderControl } from '../../framework/controls/section-header-control';
import { BaseControl } from '../../framework/controls/base-control';


export class BuilderForTemplateJson {
    static getTemplate1(): BaseControl<string>[] {
        const data = [

            new SectionHeaderControl({
                key: 'InsulationHeader',
                value: 'Insulation work',
            }),

            new TextboxControl({
                key: 'Free Text',
                label: 'Free Text',
            }),

            
            new SectionHeaderControl({
                key: 'Scafolding',
                value: 'Scafolding work',
            }),

            new TextboxControl({
                key: 'workOrderId',
                label: 'Work Order ID',
            }),

            new RadioControl({
                key: 'beamNeeded',
                label: 'Beam Needed',
                associatedControlKeys: ['weightOfBeam'],
              
                options: [
                    { key: 'yes', value: 'Yes' },
                    { key: 'no', value: 'No' },
                ],
            }),

            new TextboxControl({
                key: 'weightOfBeam',
                label: 'Weight of Beam',
                isHidden: true,
            }),
        ];
    
         
        console.log('template1.json string for server', JSON.stringify( data ));
        return data;
    }
}