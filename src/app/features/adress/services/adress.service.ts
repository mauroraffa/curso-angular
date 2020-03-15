import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, timer } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';


@Injectable()
export class AdressService {
    constructor(
        private http: HttpClient
    ) { }

    loadStates(): Observable<any> {
        return this.http.get('https://apis.datos.gob.ar/georef/api/provincias');
    }

    loadDistrict(idSate: number): Observable<any> {
        return this.http.get(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${idSate}`);
    }

    // paso 16
    searchZipCode(zipCode) {
        return timer(1000)
            .pipe(
                switchMap(() => {
                    if ([5000, 4600, 3500].indexOf(zipCode) !== -1) {
                        return of({ status: true });
                    }
                    return of({ status: false });
                })
            );
    }
}


