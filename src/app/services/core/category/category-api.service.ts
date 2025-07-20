import {delay, Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

import {CategoryResponse} from '@barterhouse/services-models/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  public getAllCategories(): Observable<CategoryResponse[]> {
    return of(this.categories).pipe(delay(25));
  }

  private categories: CategoryResponse[] = [
    {
      categoryId: 1,
      categoryNameBG: 'Хранително-вкусови промишлености',
      categoryNameEN: 'Food Industry',
      products: [
        {productId: 101, productNameBG: 'Аскорбинова киселина E300', productNameEN: 'Ascorbic Acid E300'},
        {productId: 102, productNameBG: 'Сорбинова киселина E200', productNameEN: 'Sorbic Acid E200'},
        {productId: 103, productNameBG: 'Лимонена киселина E330', productNameEN: 'Citric Acid E330'},
        {productId: 104, productNameBG: 'Натриев бензоат E211', productNameEN: 'Sodium Benzoate E211'},
        {productId: 105, productNameBG: 'Калиев сорбат E202', productNameEN: 'Potassium Sorbate E202'},
        {productId: 106, productNameBG: 'Натриев метабисулфит E223', productNameEN: 'Sodium Metabisulfite E223'},
        {productId: 107, productNameBG: 'Натриев цитрат E331', productNameEN: 'Sodium Citrate E331'},
        {productId: 108, productNameBG: 'Глицерин (E422)', productNameEN: 'Glycerin (E422)'},
        {productId: 109, productNameBG: 'Винена киселина', productNameEN: 'Tartaric Acid'},
        {productId: 110, productNameBG: 'Калциев хлорид E509', productNameEN: 'Calcium Chloride E509'},
        {productId: 111, productNameBG: 'Калциев карбонат E170', productNameEN: 'Calcium Carbonate E170'},
        {productId: 112, productNameBG: 'Натриев ериторбат E316', productNameEN: 'Sodium Erythorbate E316'},
        {productId: 113, productNameBG: 'Амонячен карамел E150c', productNameEN: 'Ammonia Caramel E150c'},
        {productId: 114, productNameBG: 'Глицерин (E422)', productNameEN: 'Glycerin (E422)'}
      ]
    },
    {
      categoryId: 2,
      categoryNameBG: 'Индустриални химикали',
      categoryNameEN: 'Industrial Chemicals',
      products: [
        {productId: 201, productNameBG: 'Калциев хлорид технически', productNameEN: 'Calcium Chloride (Technical)'},
        {
          productId: 202,
          productNameBG: 'Натриев хидроксид (Каустик сода)',
          productNameEN: 'Sodium Hydroxide (Caustic Soda)'
        },
        {productId: 203, productNameBG: 'Натриев триполифосфат', productNameEN: 'Sodium Tripolyphosphate'},
        {productId: 204, productNameBG: 'Натриев перкарбонат', productNameEN: 'Sodium Percarbonate'},
        {productId: 205, productNameBG: 'Сярна киселина', productNameEN: 'Sulfuric Acid'},
        {productId: 206, productNameBG: 'Алуминиев сулфат', productNameEN: 'Aluminium Sulfate'},
        {productId: 207, productNameBG: 'Железен сулфат', productNameEN: 'Ferrous Sulfate'},
        {productId: 208, productNameBG: 'Калиев перманганат', productNameEN: 'Potassium Permanganate'},
        {productId: 209, productNameBG: 'Амонячна вода 25%', productNameEN: 'Ammonia Solution 25%'},
        {productId: 210, productNameBG: 'Калиев перманганат', productNameEN: 'Potassium Permanganate'}
      ]
    },
    {
      categoryId: 3,
      categoryNameBG: 'Метали и сплави',
      categoryNameEN: 'Metals and Alloys',
      products: [
        {productId: 301, productNameBG: 'Меден прах', productNameEN: 'Copper Powder'},
        {productId: 302, productNameBG: 'Желязо прах', productNameEN: 'Iron Powder'},
        {productId: 303, productNameBG: 'Манган', productNameEN: 'Manganese'},
        {productId: 304, productNameBG: 'Цинк', productNameEN: 'Zinc'},
        {productId: 305, productNameBG: 'Олово', productNameEN: 'Lead'},
        {productId: 306, productNameBG: 'Алуминий', productNameEN: 'Aluminium'},
        {productId: 307, productNameBG: 'Сребро (Ag)', productNameEN: 'Silver (Ag)'},
        {productId: 308, productNameBG: 'Злато (Au)', productNameEN: 'Gold (Au)'}
      ]
    },
    {
      categoryId: 4,
      categoryNameBG: 'Козметична индустрия',
      categoryNameEN: 'Cosmetic Industry',
      products: [
        {productId: 401, productNameBG: 'Глицерин (E422)', productNameEN: 'Glycerin (E422)'},
        {productId: 402, productNameBG: 'Лимонена киселина', productNameEN: 'Citric Acid'},
        {productId: 403, productNameBG: 'Парабени', productNameEN: 'Parabens'},
        {productId: 404, productNameBG: 'Пропилен гликол', productNameEN: 'Propylene Glycol'},
        {productId: 405, productNameBG: 'Ланолин', productNameEN: 'Lanolin'}
      ]
    },
    {
      categoryId: 5,
      categoryNameBG: 'Благородни метали',
      categoryNameEN: 'Precious Metals',
      products: [
        {productId: 501, productNameBG: 'Злато (Au)', productNameEN: 'Gold (Au)'},
        {productId: 502, productNameBG: 'Сребро (Ag)', productNameEN: 'Silver (Ag)'},
        {productId: 503, productNameBG: 'Платина (Pt)', productNameEN: 'Platinum (Pt)'},
        {productId: 504, productNameBG: 'Паладий (Pd)', productNameEN: 'Palladium (Pd)'},
        {productId: 505, productNameBG: 'Родий (Rh)', productNameEN: 'Rhodium (Rh)'},
        {productId: 506, productNameBG: 'Рутений (Ru)', productNameEN: 'Ruthenium (Ru)'},
        {productId: 507, productNameBG: 'Осмий (Os)', productNameEN: 'Osmium (Os)'},
        {productId: 508, productNameBG: 'Иридий (Ir)', productNameEN: 'Iridium (Ir)'},
        {productId: 509, productNameBG: 'Покрития с благородни метали', productNameEN: 'Precious Metal Coatings'},
        {productId: 510, productNameBG: 'Алуминий сплави с Ag/Pt', productNameEN: 'Aluminium Alloys with Ag/Pt'}
      ]
    },
    {
      categoryId: 6,
      categoryNameBG: 'Металургия',
      categoryNameEN: 'Metallurgy',
      products: [
        {productId: 601, productNameBG: 'Желязо (Fe)', productNameEN: 'Iron (Fe)'},
        {productId: 602, productNameBG: 'Манганов диоксид', productNameEN: 'Manganese Dioxide'},
        {productId: 603, productNameBG: 'Алуминиев прах', productNameEN: 'Aluminium Powder'},
        {productId: 604, productNameBG: 'Цинков оксид', productNameEN: 'Zinc Oxide'},
        {productId: 605, productNameBG: 'Меден сулфат', productNameEN: 'Copper Sulfate'}
      ]
    },
    {
      categoryId: 7,
      categoryNameBG: 'За пречистване на отпадни води',
      categoryNameEN: 'Wastewater Treatment',
      products: [
        {productId: 701, productNameBG: 'Коагуланти', productNameEN: 'Coagulants'},
        {productId: 702, productNameBG: 'Флокуланти', productNameEN: 'Flocculants'},
        {productId: 703, productNameBG: 'Железен сулфат', productNameEN: 'Ferrous Sulfate'},
        {productId: 704, productNameBG: 'Алуминиев хлорид', productNameEN: 'Aluminium Chloride'}
      ]
    }
  ];
}
