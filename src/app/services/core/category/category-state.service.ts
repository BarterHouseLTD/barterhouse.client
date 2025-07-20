import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {CategoryResponse} from '@barterhouse/services-models/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryStateService {
  private allCategories$: BehaviorSubject<CategoryResponse[] | undefined> =
    new BehaviorSubject<CategoryResponse[] | undefined>(undefined);

  public getAllCategories(): Observable<CategoryResponse[] | undefined> {
    return this.allCategories$.asObservable();
  }

  public setAllCategories(allCategories: CategoryResponse[]): void {
    this.allCategories$.next(allCategories);
  }
}
