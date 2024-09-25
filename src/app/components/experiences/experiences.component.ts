import { afterRender, Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';

interface Experience {
  company: string;
  role: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  @ViewChild('title') title?: ElementRef;
  @ViewChildren('cardRight') cardsRight?: ElementRef[];
  @ViewChildren('cardLeft') cardsLeft?: ElementRef[];

  arrayExperiences: Experience[] = [
    {
      company: 'Duna System',
      role: 'Desenvolvedor Frontend (estagiário)',
      date: 'Agosto 2022 - Dezembro 2022',
      description: 'Atuei no desenvolvimento de uma nova página do site da empresa'
    },
    {
      company: 'NDS (Núcleo de Desenvolvimento de Software)',
      role: 'Desenvolvedor Frontend (voluntário)',
      date: 'Setembro 2023 - Atualmente',
      description: 'Desenvolvi uma página para um departamento da universidade e atualmente estou atuando no desenvolvimento do sistema de avisos do campus'
    }
  ]

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

      const observerRight = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            entry.target.classList.add('show-right')
          } else {
            entry.target.classList.remove('show-right')
          }
        })
      })

      observerTop.observe(this.title?.nativeElement)
      this.cardsLeft?.forEach((element) => {
        observerLeft.observe(element.nativeElement)
      })

      this.cardsRight?.forEach((element) => {
        observerRight.observe(element.nativeElement)
      })


    })
  }

}
