import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CardInfo} from '../models/card-info.model';
import {Observable} from 'rxjs';
import {flatMap, skip, take, toArray} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CardInfoService {

    private readonly cardInfoByPage = 15;

    constructor(private http: HttpClient) {
    }

    public getAllByPage(page: number): Observable<CardInfo[]> {
        return this.http.get<CardInfo[]>('https://db.ygoprodeck.com/api/v5/cardinfo.php?format=Speed%20Duel').pipe(
            flatMap(e => e),
            skip((page - 1) * this.cardInfoByPage),
            take(this.cardInfoByPage),
            toArray(),
        );
    }

}
