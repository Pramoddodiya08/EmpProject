import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './datatype';

@Injectable({
  providedIn: 'root'
})
export class EmpListService {

  constructor(private http:HttpClient) {
   }

   getData():Observable<user['users']> {
    return this.http.get('https://dummyjson.com/users');
   }
}
