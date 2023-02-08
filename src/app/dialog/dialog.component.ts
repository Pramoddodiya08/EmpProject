import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { user } from '../datatype';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent  {
  url ='';
  details :user['users']=[];

  addUser = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    image: new FormControl('',[Validators.required])
  });
  constructor( public dialogRef: MatDialogRef<DialogComponent> ){
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
  onSubmit(data:any){
    this.details = data;
    this.details.image = this.url
    this.dialogRef.close(this.details);
  }

}
