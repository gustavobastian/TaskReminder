import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicine } from '../model/medicine';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public localMedicine:Medicine=new Medicine();
  public localMedicine2:Medicine=new Medicine();
  
  public medicineGraciela: Array<Medicine>= new Array<Medicine>;
  public medicineJuan: Array<Medicine>= new Array<Medicine>;

  public result: number=0;
  public result2: number=0;


  constructor(private activatedRoute: ActivatedRoute) {
    this.localMedicine.Data="12:30";
    this.localMedicine.Name="UltraNural";
    this.result =  this.medicineGraciela.push(this.localMedicine);
    console.log("Gra:"+JSON.stringify(this.medicineGraciela));
    
    
    this.localMedicine2.Data="14:17";
    this.localMedicine2.Name="Valsartán";
    this.result2 =  this.medicineGraciela.push(this.localMedicine2);
    console.log("Gra:"+JSON.stringify(this.medicineGraciela));
    
    
    let localMedicine3:Medicine=new Medicine();
    localMedicine3.Data="12:30";
    localMedicine3.Name="MetalFormina";
    this.result =  this.medicineGraciela.push(localMedicine3);    

    let localMedicine4:Medicine=new Medicine();    
    localMedicine4.Data="14:17";
    localMedicine4.Name="Vildagliptina 50mg";
    this.result2 = this.medicineGraciela.push(localMedicine4);
    console.log("Gra:"+JSON.stringify(this.medicineGraciela));

    let localMedicine5:Medicine=new Medicine();        
    localMedicine5.Data="12:30";
    localMedicine5.Name="Carvedilol";
    this.result =  this.medicineGraciela.push(localMedicine5);    

    console.log("Gra:"+JSON.stringify(this.medicineGraciela));
    let localMedicine6:Medicine=new Medicine();        
    localMedicine6.Data="14:17";
    localMedicine6.Name="Endial 4";
    this.result2 =  this.medicineGraciela.push(localMedicine6);
    
    console.log("Gra:"+JSON.stringify(this.medicineGraciela));

    let localMedicine7:Medicine=new Medicine();        
    localMedicine7.Data="12:30";
    localMedicine7.Name="Rovartal 10";
    this.result =  this.medicineGraciela.push(localMedicine7);    

    console.log("Gra:"+JSON.stringify(this.medicineGraciela));
    let localMedicine8:Medicine=new Medicine();        
    localMedicine8.Data="14:17";
    localMedicine8.Name="Glimepirida";
    this.result2 =  this.medicineGraciela.push(localMedicine8);
    console.log("Gra:"+JSON.stringify(this.medicineGraciela));
    
    let localMedicine9:Medicine=new Medicine();        
    localMedicine9.Data="12:30";
    localMedicine9.Name="Pelmec 10";
    this.result = this.medicineGraciela.push(localMedicine9);    
    console.log("Gra:"+JSON.stringify(this.medicineGraciela));
  }



  async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    
    //adding gra medicine
    if(this.folder==='Graciela'){
      console.log("Gra:"+JSON.stringify(this.medicineGraciela));
    }

    //adding Juan medicine
    if(this.folder==='Juan'){
    this.localMedicine.Data="6:30";
    this.localMedicine.Name="cafecito";
    this.medicineJuan.push(this.localMedicine);
    this.localMedicine2.Data="12:12";
    this.localMedicine2.Name="pollito";
    this.medicineJuan.push(this.localMedicine2);
    
    console.log("Juan:"+JSON.stringify(this.medicineJuan))
    }
  }

  async onClick1(){
    console.log("click 1");
  }
  async onClick2(){
    console.log("click 2");
  }

}
