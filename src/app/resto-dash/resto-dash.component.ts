import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestoModel } from '../resto-dashboardmodel';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-resto-dash',
  templateUrl: './resto-dash.component.html',
  styleUrls: ['./resto-dash.component.css']
})
export class RestoDashComponent implements OnInit {

  formValue!: FormGroup
  restaruentModelobj: RestoModel = new RestoModel();
  allRestoData: any;
  showAdd!:boolean;
  showBtn!:boolean;
  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: ['']




    })
    this.getAll();

  }
  clickAddResto(){

    this.formValue.reset();
    this.showAdd=true;
    this.showBtn=false;
  }

  addResto() {
    this.restaruentModelobj.name = this.formValue.value.name;
    this.restaruentModelobj.email = this.formValue.value.email;
    this.restaruentModelobj.mobile = this.formValue.value.mobile;
    this.restaruentModelobj.address = this.formValue.value.address;
    this.restaruentModelobj.services = this.formValue.value.services;

    this.api.postResto(this.restaruentModelobj).subscribe(res => {
      console.log(res);
      alert('Record added successfully');
      let ref =document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this. getAll();
    }, err => {
      alert('something went worng')
    })
  }

  getAll() {
    this.api.getResto().subscribe(res => {
      this.allRestoData = res;
    })
  }

  deleteRest(data:any){
    this.api.deleteResto(data.id).subscribe(res=>{
      alert('Record deleted successfully');
      this.getAll();
    })
  }

  onEditResto(data:any){
    this.showAdd=false;
    this.showBtn=true;
    this.restaruentModelobj.id=data.id,
    this.formValue.controls['name'].setValue(data.name),
    this.formValue.controls['email'].setValue(data.email),
    this.formValue.controls['mobile'].setValue(data.mobile),
    this.formValue.controls['address'].setValue(data.address),
    this.formValue.controls['services'].setValue(data.services)

  }

  updateResto(){
    this.restaruentModelobj.name = this.formValue.value.name;
    this.restaruentModelobj.email = this.formValue.value.email;
    this.restaruentModelobj.mobile = this.formValue.value.mobile;
    this.restaruentModelobj.address = this.formValue.value.address;
    this.restaruentModelobj.services = this.formValue.value.services;

    this.api.updateRestor(this.restaruentModelobj,this.restaruentModelobj.id).subscribe(res=>{
      alert('record updated sucessfully');
      let ref =document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this. getAll();
    })

  }

}
