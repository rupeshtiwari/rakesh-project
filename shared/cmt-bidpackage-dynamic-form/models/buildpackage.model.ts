// STATE, BUILD Instance of class 
export class BidPackageTemplate {
    constructor() { }
    name: string;
    public setName(val: string) {
        // name can not be null 
        this.name = val;
    }

   static buildPersonFromJSON() { 
        return new person();
    }
}
 