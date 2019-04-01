import { Component, OnInit } from '@angular/core';
import { Iemploye } from './interf';


@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {


  empobj: Iemploye={
    name:'',
    age:'',
    upname:'',
    upage:''
  };
  Employees: Array<Iemploye>=[];

  addrow(){
   this.Employees.push(this.empobj);
   this.empobj={
    name:'',
    age:'',
    upname:'',
    upage:''
   };
    
    
  }  
       
  
  constructor() { }

  ngOnInit() {
  }
  updrow(emp:Iemploye){
    emp.name=this.empobj.upname;
    emp.age=this.empobj.upage;
    this.empobj.upname="";
    this.empobj.upage="";

     
    };
    searchText:string;
}
