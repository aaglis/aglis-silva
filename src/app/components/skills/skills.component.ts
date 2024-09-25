import { afterRender, Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';

type skillCategory = 'Frontend' | 'Design' | 'Backend e Banco de Dados' | 'Controle de versões';

interface Skill {
  iconUrl: string;
  name: string;
  category: skillCategory;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  @ViewChild ('title') title?: ElementRef;
  @ViewChildren ('skillSection') skillSections?: ElementRef[];

  arraySkills: Skill[] = [
    {
      iconUrl: '/icons/angular.png',
      name: 'Angular',
      category: 'Frontend'
    },
    {
      iconUrl: '/icons/next.png',
      name: 'Next.js',
      category: 'Frontend'
    },
    {
      iconUrl: '/icons/react.png',
      name: 'React',
      category: 'Frontend'
    },
    {
      iconUrl: '/icons/typescript.png',
      name: 'TypeScript',
      category: 'Frontend'
    },
    {
      iconUrl: '/icons/javascript.png',
      name: 'JavaScript',
      category: 'Frontend'
    },
    {
      iconUrl: '/icons/sass.png',
      name: 'Sass',
      category: 'Frontend'
    },
    {
      iconUrl: '/icons/tailwind.png',
      name: 'Tailwind',
      category: 'Frontend'
    },
    {
      iconUrl: '/icons/html.png',
      name: 'HTML',
      category: 'Frontend'
    },
    {
      iconUrl: '/icons/css.png',
      name: 'CSS',
      category: 'Frontend'
    },
    {
      iconUrl: '/icons/rxjs.png',
      name: 'RxJS',
      category: 'Frontend'
    },
    {
      iconUrl: '/icons/swiper.png',
      name: 'Swiper',
      category: 'Frontend'
    },
    {
      iconUrl: '/icons/figma.png',
      name: 'Figma',
      category: 'Design'
    },
    {
      iconUrl: '/icons/nest.png',
      name: 'Nest.js',
      category: 'Backend e Banco de Dados'
    },
    {
      iconUrl: '/icons/prisma.png',
      name: 'Prisma',
      category: 'Backend e Banco de Dados'
    },
    {
      iconUrl: '/icons/sqlite.png',
      name: 'SQLite',
      category: 'Backend e Banco de Dados'
    },
    {
      iconUrl: '/icons/git.png',
      name: 'Git',
      category: 'Controle de versões'
    },
    {
      iconUrl: '/icons/github.png',
      name: 'GitHub',
      category: 'Controle de versões'
    },
    {
      iconUrl: '/icons/gitlab.png',
      name: 'GitLab',
      category: 'Controle de versões'
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

      observerLeft.observe(this.title?.nativeElement)
      this.skillSections?.forEach((section) => {
        observerTop.observe(section.nativeElement)
      })

    })
  }
}
