import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ApiService) { }
 foodData:any;
  ngOnInit(): void {
    this.foodData=this.service.foodDetails;
  }

}
