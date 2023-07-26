// interface no coding, constant, data structure, enums 

interface BidPackageTemplate {
    title: string;
    controls: JsonFormControl[];
}



interface JsonFormControl {
    associatedControlName: string;
    source: string;
    fieldname: string;
    value: string;
    controlType: string;
    splitText: string;
    options: string[];
    chachastyles: {
        visible: true;
    };
}