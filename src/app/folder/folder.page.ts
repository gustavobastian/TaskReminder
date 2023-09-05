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



  constructor(private activatedRoute: ActivatedRoute) {
    
  }

  async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    //adding gra medicine
    if(this.folder==='Graciela'){
    this.localMedicine.Data="12:30";
    this.localMedicine.Name="geniol";
    const result = await this.medicineGraciela.push(this.localMedicine);    
    
    this.localMedicine2.Data="14:17";
    this.localMedicine2.Name="aspirineta";
    const result2 = await this.medicineGraciela.push(this.localMedicine2);
    console.log("Gra:"+JSON.stringify(this.medicineGraciela))
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
