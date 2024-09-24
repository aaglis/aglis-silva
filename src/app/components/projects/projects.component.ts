import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, Inject, ViewChild, ViewChildren, viewChildren } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Overlay } from '@angular/cdk/overlay';

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

  constructor(public dialog: MatDialog, private overlay: Overlay) {}

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
    const scrollStrategy = this.overlay.scrollStrategies.block();
    this.modalImg = imgUrl;
    // this.modalProject?.nativeElement.classList.add('active')
    const dialogRef = this.dialog.open(ModalProjectComponent, {
      scrollStrategy: scrollStrategy,
      data: {imgUrl: this.modalImg},
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
    document.documentElement.classList.add("cdk-global-scrollblock");
  }

  closeModalContainer() {
    // this.modalProject?.nativeElement.classList.remove('active')
    this.modalImg = '';
  }


}


@Component({
  selector: 'app-modal-project',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './modal-project/modal-project.component.html',
  styleUrl: './modal-project/modal-project.component.scss',
})

export class ModalProjectComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {imgUrl: string},
    private dialogRef: MatDialogRef<ModalProjectComponent>,
  ) {}

  closeModal() {
    this.dialogRef.close();
  }
  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent): void {
    this.closeModal();
  }
}
