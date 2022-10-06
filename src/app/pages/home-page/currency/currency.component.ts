import { CurrencyService } from './../../../shared/services/currency/currency.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  constructor(public currencyService: CurrencyService) { }

  ngOnInit(): void {
  }

}
