import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ng-libs-ui-add-expense',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExpenseComponent {
  addExpenseForm = new FormGroup({
    description: new FormControl(''),
    amountExclVat: new FormControl(null),
    vatPercentage: new FormControl(null),
    date: new FormControl(''),
  });

  onSubmit() {
    //
  }
}
