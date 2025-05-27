import {
  Directive,
  ElementRef,
  HostListener,
  output,
  inject,
} from '@angular/core'

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {
  private elementRef = inject(ElementRef)

  readonly clickOutside = output<MouseEvent>()

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
