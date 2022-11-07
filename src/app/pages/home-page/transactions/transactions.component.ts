import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { TransactionsService } from '@services/transactions/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
  transactions = this.transactionsService.transactions$;
  subscription: Subscription;
  openEditingTransaction: boolean;
  checkedId: number;
  openModal: boolean = false;

  @Output() editTransaction = new EventEmitter<number | undefined>();

  constructor(private transactionsService: TransactionsService) {}

  onEditTransaction(id: number) {
    this.checkedId = id;
    this.transactionsService.isEditMode = true;
    this.transactionsService.isModalOpen = true;
    this.openEditingTransaction = this.transactionsService.isModalOpen;
  }

  onDeleteTransaction(id: number) {
    this.transactionsService.deleteTransaction(id);
  }

  onModalClose() {
    this.transactionsService.isModalOpen = false;
    this.openEditingTransaction = this.transactionsService.isModalOpen;
    this.openModal = this.transactionsService.isModalOpen;
  }

  addTransactionModal() {
    this.transactionsService.isModalOpen = true;
    this.openModal = this.transactionsService.isModalOpen;
  }
}
