import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "limegreen");
    this.renderer.setStyle(this.elementRef.nativeElement, "cursor", "pointer");
  }

  @HostListener('mouseenter') mouseover(e: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "limegreen");
  }

  @HostListener('mouseleave') mouseleave(e: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent");
  }
}
