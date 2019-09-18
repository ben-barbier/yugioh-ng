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

    public currentPage = 1;

    constructor(private cardInfoService: CardInfoService) {
        this.loadCurrentPage();
    }

    public goToNextPage(): void {
        this.currentPage = this.currentPage + 1;
        this.loadCurrentPage();
    }

    public goToPreviousPage(): void {
        this.currentPage = this.currentPage - 1;
        this.loadCurrentPage();
    }

    private loadCurrentPage(): void {
        this.cardInfoService.getAllByPage(this.currentPage).subscribe((cardInfosResponse: CardInfo[]) => {
            this.cardInfos = cardInfosResponse;
        });
    }
}
