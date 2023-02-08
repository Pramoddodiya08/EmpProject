import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from '../datatype';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  EmpDetails :user['users']=[];
  constructor(private empDetails:EmpserviceService,private activted:ActivatedRoute) { }

  ngOnInit(): void {
    let userId =this.activted.snapshot.paramMap.get('userId')
     userId && this.empDetails.getUser(userId).subscribe((val) => {
    this.EmpDetails = val;
    console.log(this.EmpDetails);
    
  });
  }

}
