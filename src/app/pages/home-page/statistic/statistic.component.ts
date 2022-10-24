import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Chart, registerables } from 'chart.js';

import { TransactionsService } from './../../../shared/services/transactions/transactions.service';
import { Transaction } from './../../../shared/models/transaction.model';
import { backgroundStatistic } from '../../../shared/constants/constants';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit, OnDestroy {
  backgroundStatistic = backgroundStatistic;
  canvas: any;

  transactions = this.transactionsService.transactionsValues;
  totalExpenseSum: number;
  totalIncomeSum: number;
  totalExpenseSumSubscription: Subscription;
  totalIncomeSumSubscription: Subscription;

  arrayExpenseTypes: any = [];

  arrayExpenseCategory: Transaction[] = [];
  arrayIncomeCategory: Transaction[] = [];

  total: number;

  constructor(private elementRef: ElementRef, private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    Chart.register(...registerables);

    this.totalExpenseSumSubscription = this.transactionsService.totalExpenseSum$.subscribe(
      sum => (this.totalExpenseSum = sum)
    );

    this.totalIncomeSumSubscription = this.transactionsService.totalIncomeSum$.subscribe(
      sum => (this.totalIncomeSum = sum)
    );

    if (!!Object.keys(this.transactions).length) {
      this.transactions.forEach(transaction => {
        if (transaction.type === 'expense') {
          this.arrayExpenseCategory.push(transaction);
        } else {
          this.arrayIncomeCategory.push(transaction);
        }
      });
    }

    if (this.arrayExpenseCategory.length) {
      this.arrayExpenseCategory.forEach((el, index) => {
        el.color = this.backgroundStatistic[index];

        let obj: { type?: string; sum?: number } = {};
        obj['type'] = el.type;
        obj['sum'] = el.sum;

        // this.arrayExpenseTypes.forEach((el: Transaction) => {
        if (el.category === 'Food') {
          this.arrayExpenseTypes.push(el);
        }
        // });
      });

      this.total = this.arrayExpenseTypes.reduce((prev: Transaction, next: Transaction) => {
        return prev.sum + next.sum;
      });
      console.log(this.arrayExpenseTypes);
      console.log(this.arrayExpenseCategory);
    }

    this.createChart();
  }

  createChart() {
    let htmlRef = this.elementRef.nativeElement.querySelector(`#myChart`);
    this.canvas = new Chart(htmlRef, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: this.arrayExpenseCategory.map(el => {
              return el.sum;
            }),
            backgroundColor: this.arrayExpenseCategory.map(el => el.color),
            borderColor: this.arrayExpenseCategory.map(el => el.color),
            borderWidth: 1,
          },
        ],
        labels: this.arrayExpenseCategory.map(el => el.category),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 4,
      },
    });
  }

  ngOnDestroy(): void {
    this.totalExpenseSumSubscription.unsubscribe();
    this.totalIncomeSumSubscription.unsubscribe();
  }
}
