import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleriaModule, ButtonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images: any[] = [
    {
      itemImageSrc: '../../assets/images/casa1.jpg',
      alt: 'Description of image 1',
      title: 'Title of image 1'
    },
    {
      itemImageSrc: '../../assets/images/casa2.jpg',
      alt: 'Description of image 2',
      title: 'Title of image 2'
    },
    {
      itemImageSrc: '../../assets/images/casa3.jpg',
      alt: 'Description of image 3',
      title: 'Title of image 3'
    },
    {
      itemImageSrc: '../../assets/images/casa4.png',
      alt: 'Description of image 1',
      title: 'Title of image 1'
    },
    {
      itemImageSrc: '../../assets/images/casa5.jpg',
      alt: 'Description of image 1',
      title: 'Title of image 1'
    }
  ];

constructor() {}


  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
  ];
}

