import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  NavbarComponent,
  NavbarItem,
} from '@ng-libs/shared/ui/common-components';

@Component({
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'finance-expenses-registration';
  navItems: NavbarItem[] = [
    { label: 'Expenses Overview', route: '/expenses-overview' },
    { label: 'Expenses Approval', route: '/expenses-approval' },
  ];
}
