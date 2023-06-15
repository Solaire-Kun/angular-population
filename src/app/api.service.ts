import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  fetch(nation: string, geography?: string): Observable<any> {
    const basePath = 'https://datausa.io/api/data?drilldowns='
    return this.httpClient.get<any>(basePath + nation + '&measures=Population' + '&Geography=' + geography)
  }
}
