import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { models } from '../models/teslaModels';

@Injectable({
  providedIn: 'root'
})
export class TeslaModelService {
  constructor(private http: HttpClient) { }

  getModels(): Observable<models[]> {
    return this.http.get<models[]>("models");
  }

  getConfigurations(modelCode: string) {
    debugger
    this.http.get('/options/'+modelCode).subscribe(console.log)
  }

}
