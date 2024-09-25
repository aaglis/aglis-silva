import { afterRender, Component, ElementRef, ViewChild } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @ViewChild('leftContent') leftElements?: ElementRef;
  @ViewChild('rightContent') rightElements?: ElementRef;

  constructor() {
    afterRender(() => {
      const observerLeft = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            entry.target.classList.add('show-left')
          } else {
            entry.target.classList.remove('show-left')
          }
        })
      })
      const observerRight = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            entry.target.classList.add('show-right')
          } else {
            entry.target.classList.remove('show-right')
          }
        })
      })

      observerLeft.observe(this.leftElements?.nativeElement)
      observerRight.observe(this.rightElements?.nativeElement)
    })
  }
}
