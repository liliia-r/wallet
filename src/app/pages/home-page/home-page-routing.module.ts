import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/services/authGuard/auth.guard';
import { HomePageComponent } from './home-page.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { StatisticComponent } from './statistic/statistic.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'transactions',
        component: TransactionsComponent,
      },
      {
        path: 'statistic',
        component: StatisticComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
