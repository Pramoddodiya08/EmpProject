import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

 
  ContactForm !: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder , private router:Router){
    this.ContactForm  =  this.formBuilder.group({
      name : ['',Validators.required],
      email : ['',Validators.required],
      mobile : ['',Validators.required],
      address : ['',Validators.required],
      password : ['',Validators.required],
      gender : ['',Validators.required],
      hobby : ['',Validators.required],
      dob : ['',Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.ContactForm.controls;
  }
  hide = true;
  onSubmit(){
    this.submitted = true;
    if(this.ContactForm.invalid){
      return
    }
    else{
      alert("Suucess");
      console.log(this.ContactForm.value);
      this.router.navigate(['home']);
    }
  }
}


