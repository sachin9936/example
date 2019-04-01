import { Component, OnInit, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';



@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

   NAME:string;
   ID:string;
   CITY:string;
  updatedid:string;
  updatedname:string;
  updatedcity:string;

   Student=[{
    name:'sachin',
    id:'182',
    city:'kanpur' }]
    addrow(){
      this.Student.push({name:this.NAME,id:this.ID,city:this.CITY});
      this.ID='';
      this.NAME='';
      this.CITY='';
    }
    delete(n){
      this.Student.splice(n,1);
    }
  updrow(emp){
     emp.id=this.updatedid;
     emp.city=this.updatedcity;
     emp.name=this.updatedname;
     this.updatedid='';
     this.updatedcity='';
     this.updatedname='';



  }
  



  constructor() { }

  ngOnInit() {
  }

}
