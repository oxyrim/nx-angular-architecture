import { Route } from '@angular/router';
import { ExpensesOverviewPageComponent } from './pages/expenses-overview-page/expenses-overview-page.component';
import { ExpensesApprovalPageComponent } from './pages/expenses-approval-page/expenses-approval-page.component';

export const appRoutes: Route[] = [
  { path: 'expenses-overview', component: ExpensesOverviewPageComponent },
  { path: 'expenses-approval', component: ExpensesApprovalPageComponent },
];
