import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HomePageComponent } from './home-page.component';

import { HomePageRoutingModule } from './home-page-routing.module';
import { CoreModule } from './../../core/core.module';
import { NavigationComponent } from './navigation/navigation.component';
import { CurrencyComponent } from './currency/currency.component';
import { AddTransactionComponent } from './transactions/add-transaction/add-transaction.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionItemComponent } from './transactions/transaction-item/transaction-item.component';
import { StatisticComponent } from './statistic/statistic.component';

@NgModule({
  declarations: [
    HomePageComponent,
    NavigationComponent,
    CurrencyComponent,
    AddTransactionComponent,
    TransactionsComponent,
    TransactionItemComponent,
    StatisticComponent,
  ],
  imports: [CommonModule, HomePageRoutingModule, CoreModule, FormsModule, ReactiveFormsModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
