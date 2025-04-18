import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AddExpense } from './add-expense.interface';
import { MaxWordCountDirective } from '@ng-libs/shared/util/form-validators';

@Component({
  selector: 'ng-libs-ui-add-expense',
  standalone: true,
  imports: [CommonModule, FormsModule, MaxWordCountDirective],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExpenseComponent {
  @Input() expenseToAdd: AddExpense = {
    description: '',
    amountExclVat: null,
    vatPercentage: null,
    date: null,
  };

  @ViewChild('addExpenseForm') form!: NgForm;
  @Output() addExpense = new EventEmitter<AddExpense>();

  onSubmit() {
    this.addExpense.emit(structuredClone(this.expenseToAdd));
    this.form.reset();
  }
}
