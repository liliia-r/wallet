import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Currency } from './../../../shared/models/currency.model';
import { CurrencyService } from './../../../shared/services/currency/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit, OnDestroy {
  currencies: Currency[];
  currencySubscription: Subscription;

  constructor(public currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencySubscription = this.currencyService
      .getCurrencies()
      .subscribe(currencies => (this.currencies = currencies));
  }

  ngOnDestroy(): void {
    this.currencySubscription.unsubscribe();
  }
}
