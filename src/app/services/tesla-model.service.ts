import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Models, TeslaConfig } from '../models/teslaModels';

@Injectable({
  providedIn: 'root'
})
export class TeslaModelService {
  constructor(private http: HttpClient) { }

  getModels(): Observable<Models[]> {
    return this.http.get<Models[]>("models");
  }

  getConfigurations(modelCode: string): Observable<TeslaConfig> {
    return this.http.get<TeslaConfig>('/options/'+modelCode)
  }

}
