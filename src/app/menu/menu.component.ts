import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:ApiService) { }
 foodData:any;
  ngOnInit(): void {
    this.foodData=this.service.foodDetails;
  }

}
