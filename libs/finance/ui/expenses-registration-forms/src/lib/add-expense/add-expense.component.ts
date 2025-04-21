import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { AddExpense } from './add-expense.interface';

@Component({
  selector: 'ng-libs-ui-add-expense',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExpenseComponent {
  @Input() public set expenseToAdd(value: AddExpense) {
    this.addExpenseForm.patchValue(value);
    this.addExpenseForm.controls.tags.clear();
    value.tags?.forEach((tag) => {
      this.addExpenseForm.controls.tags.push(new FormControl(tag));
    });
  }

  addExpenseForm = new FormGroup({
    description: new FormControl(''),
    amount: new FormGroup({
      amountExclVat: new FormControl(null),
      vatPercentage: new FormControl(null),
    }),
    date: new FormControl(['']),
    tags: new FormArray([new FormControl('')]),
  });

  removeTag(index: number): void {
    this.addExpenseForm.controls.tags.removeAt(index);
  }

  addTag() {
    this.addExpenseForm.controls.tags.push(new FormControl(''));
  }

  onSubmit() {
    //
  }
}
