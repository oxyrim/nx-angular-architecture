import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiplyPipe } from '@ng-libs/shared/util/common-pipes';

@Component({
  selector: 'app-expenses-overview-page',
  standalone: true,
  imports: [CommonModule, MultiplyPipe],
  templateUrl: './expenses-overview-page.component.html',
  styleUrl: './expenses-overview-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExpensesOverviewPageComponent {}
