import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[ngLibsUtilMaxWordCount]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MaxWordCountDirective,
      multi: true,
    },
  ],
})
export class MaxWordCountDirective implements Validator {
  @Input('ngLibsUtilMaxWordCount') maxWords = 1;

  validate(control: AbstractControl): ValidationErrors | null {
    const wordCount = control?.value?.trim().split('').length;
    return wordCount > this.maxWords
      ? { ngLibsUtilMaxWordCount: { count: wordCount } }
      : null;
  }
}
