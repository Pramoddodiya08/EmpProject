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
loginForm = new FormGroup({
  email:new FormControl('',[Validators.required, Validators.email]),
  password:new FormControl('',[Validators.required]),
});
constructor(private empData:empnewService,private router:Router){}
Onsubmit(data:any){
  this.empData.loginUser(data).subscribe((data)=>{
    this.router.navigate(['about']);
  })
}
}