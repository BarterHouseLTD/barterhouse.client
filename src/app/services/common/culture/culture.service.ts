import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {Culture} from '@barterhouse/enumerations';

@Injectable({
  providedIn: 'root'
})
export class CultureService {
  private culture$: BehaviorSubject<Culture> = new BehaviorSubject<Culture>(Culture.BG);

  public getCulture(): Observable<Culture> {
    return this.culture$.asObservable();
  }

  public setCulture(culture: Culture): void {
    this.culture$.next(culture);
  }
}
