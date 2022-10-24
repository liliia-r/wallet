import { Component } from '@angular/core';
import { TransactionsService } from './../../../shared/services/transactions/transactions.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(public transactionsService: TransactionsService) {}
}
