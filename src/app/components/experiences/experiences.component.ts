import { Component } from '@angular/core';

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

}
