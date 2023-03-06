export class Medicine {    
    
    private _medicineName: string="";
    private _medicineData: string="";
    
    constructor(){
        this._medicineData="";
        this._medicineName="";
    }

    
    public set Name( pName:string){
        this._medicineName=pName;
    }
    public get Name():string{
        return this._medicineName;
    }

    public set Data( pName:string){
        this._medicineData=pName;
    }
    public get Data():string{
        return this._medicineData;
    }


}
