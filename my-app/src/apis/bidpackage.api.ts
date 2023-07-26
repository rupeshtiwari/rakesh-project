import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BidPackageBackendData } from '../dto/bidpackage-backend.dto';

@Injectable({
    providedIn: 'root'
})
export class BidPackageApi {
    private apiUrl = 'https://api.example.com/data'; // Replace this with your API endpoint

    constructor(private http: HttpClient) { }

    fetchData(): Observable<BidPackageBackendData> {
        return this.http.get<BidPackageBackendData>(this.apiUrl);
    }
}