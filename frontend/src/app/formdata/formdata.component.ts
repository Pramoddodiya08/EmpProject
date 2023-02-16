import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { update } from '../datatype';
import { empnewService } from '../empnewService';

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormdataComponent implements OnInit {

  showFormMode = true;
  editMode = false;
  editvalue !:update;
  demoform = new FormGroup({
    name : new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required, Validators.email]),
    mobile:new FormControl('',[Validators.required])
  });
  data :any[]=[];
  constructor(private dataSer:empnewService) {this.getUser(); }

  ngOnInit(): void {
    this.getUser();
  }
  Onsubmit(data:any){
    this.dataSer.PostDemoUser(data).subscribe(
      (res:any)=>{
        console.log(res);
        this.demoform.reset();
      }
    )   
  }
  getUser(){
    this.dataSer.getDemoUser().subscribe(
      (res:any)=>{
        this.data = res;
        this.getUser();
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  deleteUser(id:any){
   this.dataSer.deleteDemo(id).subscribe(
    (res)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    }
   )
  }

  updateUser(data:any){
    this.showFormMode = false
    this.editMode = true;
    this.demoform.patchValue(data); 
    this.editvalue= data;
  }

  onEditData(edata:any){
    this.editvalue.name = edata.name;
    this.editvalue.email = edata.email;
    this.editvalue.mobile = edata.mobile;
    this.dataSer.updateDemo(this.editvalue).subscribe(
      (res)=>{
        console.log(res);
        this.getUser();
        this.demoform.reset();
        this.editMode =false;
        this.showFormMode=true;
      }
    )
  }
 reset(){
  this.demoform.reset();
 }
}