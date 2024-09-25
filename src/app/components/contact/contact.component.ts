import { afterRender, Component, ElementRef, ViewChildren } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  @ViewChildren('title') titles?: ElementRef[]
  @ViewChildren('social') socials?: ElementRef[];

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
      const observerTop = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            entry.target.classList.add('show-top')
          } else {
            entry.target.classList.remove('show-top')
          }
        })
      })

      this.titles?.forEach((element) => {
        observerLeft.observe(element.nativeElement)
      })

      this.socials?.forEach((element) => {
        observerTop.observe(element.nativeElement)
      })
    })
  }
}
