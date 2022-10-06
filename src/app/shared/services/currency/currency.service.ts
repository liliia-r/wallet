import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  // currencies$: Observable<[]>

  constructor(private http: HttpClient) { }

  getCurrencies () {
    // return this.currencies$ =
    return this.http.get('https://kurstoday.com/api/average/banks').pipe(
      tap(data => {
        console.log(data);
      })
    )
  }
}
