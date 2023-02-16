import { Component } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empnewService } from '../empnewService';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  Data :any[]=[]
loginForm = new FormGroup({
  email:new FormControl('',[Validators.required, Validators.email]),
  password:new FormControl('',[Validators.required]),
});
constructor(private empData:empnewService,private router:Router){
  this.getUser();
}
Onsubmit(data:any){
  this.empData.PostLogUser(data).subscribe(
    (res)=>{
      console.log(res); 
      this.getUser();
    }
  )
}

getUser(){
  this.empData.getLogUser().subscribe(
    (res:any)=>{
      this.Data = res; 
    }
  )
}
}