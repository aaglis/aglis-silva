import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  arraySkills = [
    'Frontend Developer'
  ]

  arrayProjects = [
    '/images/deppi-image.png',
    '/images/projeto-agape.png',
    '/images/landing-next.png',
  ]

}
