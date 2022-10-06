import { TransactionsService } from './../../shared/services/transactions/transactions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  openModal: boolean;
  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {}

  addTransaction() {
    this.transactionsService.isModalOpen = true;
    this.openModal = this.transactionsService.isModalOpen;
  }

  onModalClose() {
    this.transactionsService.isModalOpen = false;
    this.openModal = this.transactionsService.isModalOpen;
  }
}
