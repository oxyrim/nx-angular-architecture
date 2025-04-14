import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[ngLibsUiHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input() ngLibsUiHighlight = 'black';
  @Input() textColor = 'white';

  private originalBgColor = 'black';
  private originalColor = 'white';

  private el = inject(ElementRef).nativeElement;

  @HostListener('mouseenter') onMouseEnter() {
    this.originalBgColor = this.el.style.backgroundColor;
    this.originalColor = this.el.style.color;
    this.el.style.backgroundColor = this.ngLibsUiHighlight;
    this.el.style.color = this.textColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.style.backgroundColor = this.originalBgColor;
    this.el.style.color = this.originalColor;
  }
}
