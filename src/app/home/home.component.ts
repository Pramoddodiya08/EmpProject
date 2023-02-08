import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { user } from '../datatype';
import { DialogComponent } from '../dialog/dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { EmpListService } from '../emp-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  title = 'empData';
  newData:user['users']=[];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  displayedColumns: string[] = ['image', 'firstName', 'lastName','email','Action'];
  dataSource:user['users']=[];
  constructor(public dialog: MatDialog,private EmpData:EmpListService ){
      this.EmpData.getData().subscribe((val:user['users'])=>{
        this.dataSource = val ;
         this.dataSource['users'] = new MatTableDataSource(this.dataSource.users); 
        this.dataSource['users'].paginator = this.paginator;
        this.dataSource['users'].sort = this.sort;
      })
  }
  deleteitem(id:number){
    this.dataSource['users'].data =this.dataSource['users'].data.filter((u:any) => u.id !== id);
  }
  addUser(){
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((result)=>{
      if (result === '') { 
      
      } else {
      this.newData = result; 
      this.dataSource['users'].data = [this.newData].concat(this.dataSource['users'].data);
      }
    })
  }
  editData(data:any){
    const dialogRef = this.dialog.open(EditDialogComponent,{
      height:'',
      width:'500px',
       data
      });

      dialogRef.afterClosed().subscribe(data => {
       this.dataSource.image = data.image
      });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource['users'].filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


