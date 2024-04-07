// Import necessary modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoupGarouLlmService {

  // Base URL of your REST API
  private apiUrl: string = 'http://yourapiurl.com/api/';

  constructor(private http: HttpClient) { }

  // Method to retrieve data from the API
  getData(): Observable<any> {
    // Construct the complete URL for the endpoint
    const url: string = `${this.apiUrl}/your_endpoint`;

    // Make the HTTP GET request and return the Observable
    return this.http.get(url);
  }

  // Method to post data to the API
  postMsg(data: any): Observable<any> {
    // Construct the complete URL for the endpoint
    const url: string = `${this.apiUrl}/your_endpoint`;
    console.log("check this out");
    
    // Make the HTTP POST request and return the Observable
    return this.http.post(url, data);
  }
}
