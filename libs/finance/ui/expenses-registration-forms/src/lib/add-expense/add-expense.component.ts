import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AddExpense } from './add-expense.interface';
import { maxWordCountValidator } from '@ng-libs/shared/util/form-validators';

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

  @Output() addExpense = new EventEmitter<AddExpense>();

  addExpenseForm = new FormGroup({
    description: new FormControl('', [
      Validators.required,
      maxWordCountValidator(10),
    ]),
    amount: new FormGroup({
      amountExclVat: new FormControl<number | null>(null, [
        Validators.required,
      ]),
      vatPercentage: new FormControl<number | null>(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
    }),
    date: new FormControl([''], [Validators.required]),
    tags: new FormArray([new FormControl('')]),
  });

  removeTag(index: number): void {
    this.addExpenseForm.controls.tags.removeAt(index);
  }

  addTag() {
    this.addExpenseForm.controls.tags.push(new FormControl(''));
  }

  onSubmit() {
    this.addExpense.emit(
      structuredClone(this.addExpenseForm.value as AddExpense)
    );
    this.addExpenseForm.reset();
  }
}
