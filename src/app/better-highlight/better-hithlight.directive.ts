import { Directive, Renderer2, OnInit, ElementRef, HostListener,HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHithlightDirective implements OnInit {

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }
  @Input() defaultColor:string = 'transparent';
  @Input('appBetterHighlight') highlightColor:string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor:string;

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(){
   // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');     
   this.backgroundColor = this.highlightColor;
  }
  
  @HostListener('mouseleave') mouseleave(){    
   // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
   this.backgroundColor = this.defaultColor;
  }

}
