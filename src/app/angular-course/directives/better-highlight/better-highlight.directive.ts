import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  @Input() defaultColor: string = "transparent";
  @Input() defaultHighlightColor = "blue";

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;

    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "limegreen");
    this.renderer.setStyle(this.elementRef.nativeElement, "cursor", "pointer");
  }

  @HostListener('mouseenter') mouseover(e: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "limegreen");

    this.backgroundColor = this.defaultHighlightColor;
  }

  @HostListener('mouseleave') mouseleave(e: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent");

    this.backgroundColor = this.defaultColor;
  }
}
