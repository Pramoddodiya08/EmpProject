import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { empnewService } from '../empnewService';

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormdataComponent implements OnInit {
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
      (res)=>{
        console.log(res);
      },(err)=>{
        console.log(err);
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
}