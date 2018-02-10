import { Component, OnInit } from '@angular/core';
import {SearchService} from '../services/search.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  select:any;
  location:any;
  Hospitals:[any];
  constructor(private SS:SearchService) { }

  ngOnInit() {
    this.select=1;
  }
changeValue(s:any)
{
  this.select=s;
}
submit()
{
console.log("hehe");  
let loc={
  location:this.location
}
console.log(loc+"  "+this.select);
if(this.select==1)
{
  this.SS.searchHospitalByLocationName(loc).subscribe(data=>{
    if(data['success'])
    {
      this.Hospitals=data['data'];
      console.log(this.Hospitals);
    }
  });
} 
if(this.select==2)
{
this.SS.searchDoctorByLocationName(loc).subscribe(data=>{
  if(data['success'])
  {
  this.Hospitals=data['data'];
  console.log(this.Hospitals);

  }
});

}

}
}
