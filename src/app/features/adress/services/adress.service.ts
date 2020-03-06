import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AdressService {
    constructor(
        private http: HttpClient
    ) {}

    loadStates(): Observable<any> {
        return this.http.get('https://apis.datos.gob.ar/georef/api/provincias');
    }
}
