import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Currency } from '@models/currency.model';
import { apiUrl } from '@shared/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = apiUrl;

  constructor(private http: HttpClient) {}

  // getCurrencies(): Observable<Currency[]> {
  //   return this.http.get<Currency[]>(this.apiUrl);
  // }
}
