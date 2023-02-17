import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { empnewService } from '../empnewService';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  Data :any[]=[];
  mySubscription !:Subscription;
loginForm = new FormGroup({
  email:new FormControl('',[Validators.required, Validators.email]),
  password:new FormControl('',[Validators.required]),
});
constructor(private empData:empnewService){
}
Onsubmit(data:any){
  this.mySubscription =this.empData.PostLogUser(data).subscribe(
    (res)=>{
      console.log(res); 
      this.getUser();
    }
  )
}

getUser(){
  this.mySubscription =this.empData.getLogUser().subscribe(
    (res:any)=>{
      this.Data = res; 
    }
  )
}
ngOnDestroy(): void {
  this.mySubscription.unsubscribe();
}
}