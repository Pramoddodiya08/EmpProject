import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class empnewService {
  constructor(private http:HttpClient){}


  PostDemoUser(data:any){
    return this.http.post('http://localhost:3000/employee',data);
  }
  getDemoUser(){
    return this.http.get('http://localhost:3000/employee');
  }
  deleteDemo(id:string){
    return this.http.delete(`http://localhost:3000/employee/${id}`);
  }
  updateDemo(data:any){
    return this.http.put(`http://localhost:3000/employee/${data._id}`, data);
  }

  PostLogUser(data:any){
    return this.http.post('http://localhost:3000/loginUser',data);
  }
  getLogUser(){
    return this.http.get('http://localhost:3000/loginUser');
  }
  deleteLog(id:string){
    return this.http.delete(`http://localhost:3000/loginUser/${id}`);
  }
}
