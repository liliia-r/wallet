import { Transaction } from './../../../shared/models/transaction.model';
import { TransactionsService } from './../../../shared/services/transactions/transactions.service';
import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit, OnDestroy {
  transactions: Transaction[];
  subscription: Subscription;
  openEditingTransaction: boolean;

  @Output() editTransaction = new EventEmitter<number | undefined>();

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.subscription = this.transactionsService.transactionsChanges.subscribe(
      (transactions: Transaction[]) => {
        this.transactions = transactions;
      }
    );
    this.transactions = this.transactionsService.getTransactions();
    console.log(this.transactions);
  }

  onEditTransaction(id: number) {
    console.log('edit', id);
    this.editTransaction.emit(id);
    this.transactionsService.isEditMode = true;
    this.transactionsService.isModalOpen = true;
    this.openEditingTransaction = this.transactionsService.isModalOpen;
    console.log(this.openEditingTransaction);
  }

  onDeleteTransaction(id: number) {
    console.log('delete');
    this.transactionsService.deleteTransaction(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
