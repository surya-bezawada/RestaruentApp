import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: ApiService, private formBuilder: FormBuilder,private http:HttpClient) { }
  getMenuId: any;
  menuData: any;
  menuForm!: FormGroup;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId, 'getmenu');
    if (this.getMenuId) {
      this.menuData = this.service.foodDetails.filter((value) => {
        return value.id == this.getMenuId;
      });
      console.log(this.menuData, 'menudata>>');

    }

    this.menuForm = this.formBuilder.group({
      fullname: [''],
      mobile: [''],
      address: [''],
    })



  }
  orderPlace(){
    this.http.post<any>("http://localhost:3000/profile",this.menuForm.value).subscribe(res=>{
      alert("orderplaced successfully");
      this.menuForm.reset();
      
    },
    err=>{
      alert("something went worng");
    }
    )

  }

}
