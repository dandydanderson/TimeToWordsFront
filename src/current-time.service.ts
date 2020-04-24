import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CurrentTimeService {

  currentTimeUrl: string = 'http://localhost:8080/time';

  constructor(private http: HttpClient, private httpH: HttpHandler) { }

  getCurrentTime(): Observable<string> {
    return this.http.get<string>(this.currentTimeUrl);
  }

}
