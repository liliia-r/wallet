import { TransactionsService } from './../../../shared/services/transactions/transactions.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(public transactionsService: TransactionsService) {}
}
