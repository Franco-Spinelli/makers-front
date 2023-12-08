import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//  This service is responsible for handling communication with the database. It facilitates the interaction between the application and the database,
// managing queries, updates, and data retrieval. By serving as the intermediary layer, this service ensures seamless and efficient access to the underlying data storage, 
//contributing to the overall functionality and performance of the application.

export class ApiService {
  private apiUrl = 'http://localhost:8092/api'; 
  constructor(private http: HttpClient) {}  
  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/maker/findAll`);
  }
  getProduct(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/product/findAll`);
  }
  updateProduct(bodyMapping: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(`${this.apiUrl}/product/save`,bodyMapping,{headers});
  }
}