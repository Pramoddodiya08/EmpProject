import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { user } from '../datatype';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { empnewService } from '../empnewService';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'empData';
  newData:user['users']=[];
  displayedColumns: string[] = ['image', 'firstName', 'lastName','email','Action'];
  dataSource:user['users']=[];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  image!: SafeUrl; 

  addUsers = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    image: new FormControl('',[Validators.required])
  });
  
  url: any;

  constructor(public dialog: MatDialog,
    private EmpData:EmpserviceService ,
    private empData:empnewService,
    private sanitizer: DomSanitizer)
    {this.fisrtCallFunction();}
    ngOnInit(): void {
    }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource['users'].filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteitem(id:number){
      this.EmpData.deleteUser(id).subscribe(()=>{
        this.dataSource['users'].data =this.dataSource['users'].data.filter((u:any) => u.id !== id);
      })
      this.empData.deleteUser(id).subscribe(()=>{
        this.dataSource['users'].data = this.dataSource['users'].data.filter((u:any)=> u.id !== id);
      });

  }

  editData(data:any){
    const dialogRef = this.dialog.open(EditDialogComponent,{
      height:'',
      width:'500px',
       data
      });
      dialogRef.afterClosed().subscribe(data => {
       this.EmpData.updateUser(data).subscribe();
       this.empData.updateUser(data).subscribe();
      });
  }
  fisrtCallFunction(){
    this.EmpData.getData().subscribe((val:user['users'])=>{
      this.empData.getNewUser().subscribe((result:user['users'])=>{ 
        this.dataSource = [...result].concat(val.users);
         this.dataSource['users'] = new MatTableDataSource(this.dataSource); 
       this.dataSource['users'].paginator = this.paginator;
      })
    })
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
    data.image = this.url;
    this.empData.postUser(data).subscribe((val)=>{
     this.dataSource['users'].data = [val].concat(this.dataSource['users'].data);
    })
  }
}


