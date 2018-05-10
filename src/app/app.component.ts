import {Component, ElementRef, EventEmitter, Input, Output, Renderer2} from '@angular/core';

@Component({
  selector: 'element-with-md-button',
  template: `
    <div style="text-align:center">
      <mat-card class="example-card">
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title>Shiba Inu</mat-card-title>
          <mat-card-subtitle>Dog Breed</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
        <mat-card-content>
          <p>
            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.
          </p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button (click)="handleClick()">{{message}}</button>
          <button mat-button>SHARE</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  element: ElementRef;
  renderer: Renderer2;


  constructor(element: ElementRef, renderer: Renderer2) {
    this.element = element;
    this.renderer = renderer;
  }

  @Input("message")
  message = "default";

  @Input("action")
  set action(func) {
    console.log(func);
    this.renderer.listen(this.element.nativeElement, 'on_rigth_click', window[func]);
  }

  @Output() on_rigth_click = new EventEmitter<string>();
  handleClick() {
    console.debug(this);
    this.on_rigth_click.emit(this.message)
  }
}
