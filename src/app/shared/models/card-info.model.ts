import {CardSet} from './card-set.model';
import {CardImage} from './card-image.model';
import {CardPrice} from './card-price.model';

export interface CardInfo {
    id: string;
    name: string;
    type: string;
    desc: string;
    race: string;
    card_sets: CardSet[];
    card_images: CardImage[];
    card_prices: CardPrice;
}
