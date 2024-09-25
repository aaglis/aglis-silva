import { afterRender, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  @ViewChild ('leftWrapper') leftElements?: ElementRef
  @ViewChild ('rightWrapper') rightElements?: ElementRef

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

  arraySkills = [
    'Frontend Developer'
  ]

  arrayProjects = [
    '/images/deppi-image.png',
    '/images/projeto-agape.png',
    '/images/landing-next.png',
  ]

  ngAfterViewInit(): void {

  }
}
