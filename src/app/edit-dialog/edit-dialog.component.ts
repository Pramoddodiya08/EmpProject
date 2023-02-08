import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { user } from '../datatype';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  url='';
  details :user['users']=[];
  editForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required])
  });
  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any) {}
   
  ngOnInit(): void {
    this.url = this.data.image
    this.details = this.data;
  }
  onSubmit(data:any){
    this.details.firstName = data.firstName;
    this.details.lastName = data.lastName;
    this.details.email = data.email;
    this.details.image = this.url;
    this.dialogRef.close(this.details);
  }
  onselectFile(event:any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }
  Close(){
    this.dialogRef.close();
  }
}
