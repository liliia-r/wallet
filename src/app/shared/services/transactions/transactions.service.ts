import { Injectable } from '@angular/core';
import { map, BehaviorSubject } from 'rxjs';

import { Transaction } from '@models/transaction.model';
import { rangesExpense, rangesIncome } from '@shared/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  rangesExpense = rangesExpense;
  rangesIncome = rangesIncome;

  private _transactions = new BehaviorSubject<Transaction[]>([
    new Transaction('income', 'Regular income', 56, '2022-10-07', 'ytytffcfgc'),
    new Transaction('income', 'Regular income', 9000, '2022-10-07', 'ytytffcfgc'),
    new Transaction('expense', 'Basic', 100, '2022-10-07', '!!!!!!!!!!!'),
    new Transaction('expense', 'Food', 1000, '2022-10-07', '!!!!!!!!!!!'),
    new Transaction('expense', 'Car', 2000, '2022-10-07', '!!!!!!!!!!!'),
    new Transaction('expense', 'Food', 500, '2022-10-07', '!!!!!!!!!!!'),
  ]);
  transactions$ = this._transactions.asObservable();

  isEditMode: boolean = false;
  isModalOpen: boolean = false;

  totalSum$ = this.transactions$.pipe(
    map(transactions =>
      transactions
        .map(transaction => {
          if (transaction.type === 'expense') {
            return -1 * transaction.sum;
          } else {
            return transaction.sum;
          }
        })
        .reduce((accumulator: number, nextPrice: number) => {
          return accumulator + nextPrice;
        }, 0)
    )
  );

  totalExpenseSum$ = this.transactions$.pipe(
    map(transactions =>
      transactions
        .map(transaction => {
          if (transaction.type === 'expense') {
            return transaction.sum;
          } else {
            return 0;
          }
        })
        .reduce((accumulator: number, nextPrice: number) => {
          return accumulator + nextPrice;
        }, 0)
    )
  );

  totalIncomeSum$ = this.transactions$.pipe(
    map(transactions =>
      transactions
        .map(transaction => {
          if (transaction.type === 'income') {
            return transaction.sum;
          } else {
            return 0;
          }
        })
        .reduce((accumulator: number, nextPrice: number) => {
          return accumulator + nextPrice;
        }, 0)
    )
  );

  get transactionsValues() {
    return this._transactions.value;
  }

  constructor() {}

  getTransactions() {
    return this.transactionsValues.slice();
  }

  getTransaction(id: number) {
    return this.transactionsValues[id];
  }

  addTransaction(transaction: Transaction) {
    const transactionsChanges = [...this.transactionsValues, transaction];

    this._transactions.next(transactionsChanges);
  }

  updateTransaction(id: number, newTransaction: Transaction) {
    this.transactionsValues[id] = newTransaction;

    this._transactions.next(this.transactionsValues.slice());
  }

  deleteTransaction(id: number) {
    this.transactionsValues.splice(id, 1);

    this._transactions.next(this.transactionsValues.slice());
  }
}
