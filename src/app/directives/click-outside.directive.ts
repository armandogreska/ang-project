import { Directive, ElementRef, HostListener, output } from '@angular/core'

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {
  readonly clickOutside = output<MouseEvent>()

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement

    // Check if the click was outside the element
    if (
      targetElement &&
      !this.elementRef.nativeElement.contains(targetElement)
    ) {
      this.clickOutside.emit(event)
    }
  }
}
