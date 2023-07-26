import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { BaseControl } from '../framework/controls/base-control';
import { BuilderForTemplateJson } from './utils/json-builder';


@Injectable({
    providedIn: 'root'
})
export class BidPackageApi {
    // private apiUrl = 'https://api.example.com/data'; // Replace this with your API endpoint
    private apiUrl = './assets/template1.json';
    
    

    constructor(private http: HttpClient) { }

    fetchData(): Observable<BaseControl<string>[]> {
        // return this.http.get<BaseControl<string>[]>(this.apiUrl);

       return of(BuilderForTemplateJson.getTemplate1());
    }
}