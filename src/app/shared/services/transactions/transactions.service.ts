import { Subject } from 'rxjs';
import { Transaction } from './../../models/transaction.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  rangesExpense: { value: string; label: string }[] = [
    {
      value: 'Basic',
      label: 'Basic',
    },
    {
      value: 'Food',
      label: 'Food',
    },
    {
      value: 'Car',
      label: 'Car',
    },
    {
      value: 'Development',
      label: 'Development',
    },
    {
      value: 'Children',
      label: 'Children',
    },
    {
      value: 'House',
      label: 'House',
    },
    {
      value: 'Education',
      label: 'Education',
    },
    {
      value: 'The other',
      label: 'The other',
    },
  ];

  rangesIncome: { value: string; label: string }[] = [
    {
      value: 'Regular income',
      label: 'Regular income',
    },
    {
      value: 'Non-regular income',
      label: 'Non-regular income',
    },
  ];

  private transactions: Transaction[] = [
    {
      type: 'income',
      category: 'regular income',
      sum: 56,
      date: Date.now(),
      comment: 'ytytffcfgc',
    },
    {
      type: 'income',
      category: 'regular income',
      sum: 56,
      date: Date.now(),
      comment: 'ytytffcfgc',
    },
  ];

  transactionsChanges = new Subject<Transaction[]>();
  isEditMode: boolean = false;
  isModalOpen: boolean = false;

  constructor() {}

  getTransactions() {
    return this.transactions.slice();
  }

  getTransaction(id: number) {
    return this.transactions[id];
  }

  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
    this.transactionsChanges.next(this.transactions.slice());
  }

  updateTransaction(id: number, newTransaction: Transaction) {
    this.transactions[id] = newTransaction;
    this.transactionsChanges.next(this.transactions.slice());
  }

  deleteTransaction(id: number) {
    this.transactions.splice(id, 1);
    this.transactionsChanges.next(this.transactions.slice());
  }

  setTransactions(transactions: Transaction[]) {
    this.transactions = transactions;
    this.transactionsChanges.next(this.transactions.slice());
  }
}
