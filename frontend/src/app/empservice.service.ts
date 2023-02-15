import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './datatype';


@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
 
  constructor(private http:HttpClient){}
  getData(){
    return this.http.get('https://dummyjson.com/users/');
  }
  getUser(id :string){
    return this.http.get(`https://dummyjson.com/users/${id}`);
  }
  deleteUser(id: number): Observable<user> {
    return this.http.delete<user>(`https://dummyjson.com/users/${id}`);
  }
  addUser(user: user): Observable<user> {
    return this.http.post<user>(`https://dummyjson.com/users/add`, user);
  }
  updateUser(user: user): Observable<user> {
    return this.http.patch<user>(`https://dummyjson.com/users/${user.id}`, user);
  }
}
