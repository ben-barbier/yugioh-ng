import {Component} from '@angular/core';
import {CardInfoService} from '../shared/services/card-info.service';
import {CardInfo} from '../shared/models/card-info.model';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    public cardInfos: CardInfo[] = [];

    constructor(private cardInfoService: CardInfoService) {
        cardInfoService.getAll().subscribe((cardInfosResponse: CardInfo[]) => {
            this.cardInfos = cardInfosResponse;
        });
    }

}
