import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CardInfo} from '../models/card-info.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CardInfoService {

    constructor(private http: HttpClient) {
    }

    public getAll(): Observable<CardInfo[]> {
        return this.http.get<CardInfo[]>('https://db.ygoprodeck.com/api/v5/cardinfo.php?format=Speed%20Duel');
    }

}
