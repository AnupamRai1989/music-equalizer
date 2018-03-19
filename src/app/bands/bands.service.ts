import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { BandModel } from './models/band.model';
import { BandResponseModel } from './models/dto/band-response.model';

@Injectable()
export class BandsService {

    constructor(private http: HttpClient) {
    }

    getBands(): Observable<BandModel[]> {
        return this.http.get('/assets/data/bands.json')
            .map((response: BandResponseModel) => response && response.bands);
    }

}