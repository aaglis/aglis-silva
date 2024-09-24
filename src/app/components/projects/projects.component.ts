import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, ViewChild, ViewChildren, viewChildren } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

interface cardProject {
  imgURL: string;
  title: string;
  usedSkills: string[];
  finishedDate: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {

  @ViewChild('modalProject') modalProject?: ElementRef;
  @ViewChild('closeModal') closeModal?: ElementRef;
  modalImg: string = '';

  arrayProjects: cardProject[] = [
    {
      imgURL: '/images/deppi-image.png',
      title: 'Deppi',
      usedSkills: ['Angular'],
      finishedDate: '24 de Agosto, 2024',
    },
    {
      imgURL: '/images/projeto-agape.png',
      title: 'Projeto Ágape',
      usedSkills: ['Angular'],
      finishedDate: '4 de Novembro, 2024',
    },
    {
      imgURL: '/images/landing-next.png',
      title: 'Virtual VPN',
      usedSkills: ['Next.js'],
      finishedDate: '15 de Setembro, 2024',
    }
  ]


  ngAfterViewInit(): void {
  }

  setModalImg(imgUrl: string) {
    this.modalImg = imgUrl;
    this.modalProject?.nativeElement.classList.add('active')
  }

  closeModalContainer() {
    this.modalProject?.nativeElement.classList.remove('active')
    this.modalImg = '';
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent): void {
    this.closeModalContainer();
  }

}
