import { CommonModule } from '@angular/common';
import { afterRender, Component, ElementRef, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuIsOpened: boolean = false;
  private elementRef = inject(ElementRef)
  lastScrollTop:number = 0

  constructor() {
    afterRender(() => {
      window.addEventListener('scroll', () => {
        if(scrollY > 200) {
          this.elementRef.nativeElement.style.top = '-150px'
        } else {
          this.elementRef.nativeElement.style.top = '0'
        }

        if(scrollY > 400) {
          this.elementRef.nativeElement.classList.add('shadow')
        } else {
          this.elementRef.nativeElement.classList.remove('shadow')
        }

        if((scrollY > 800) && (innerWidth > 1150)) {
          this.elementRef.nativeElement.style.top = '20px'
        }
        this.lastScrollTop = scrollY
      })
    })
  }

  toggleMenu() {
    this.menuIsOpened = !this.menuIsOpened;
  }

}
