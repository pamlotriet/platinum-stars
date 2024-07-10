import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-our-team-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './our-team-page.component.html',
  styleUrl: './our-team-page.component.css',
})
export class OurTeamPageComponent {
  teachers = [
    {
      fullname: 'Niesje Foster',
      class: 'Space Class',
      imageURL: '../../../assets/images/teachers/Niesje.svg',
      role: 'Teacher',
    },
    {
      fullname: 'Elize Human',
      class: 'Babbelbekkie klas',
      imageURL: '../../../assets/images/teachers/Elize.svg',
      role: 'Teacher',
    },
    {
      fullname: 'Cherease Erasmus',
      class: 'Nemo Class',
      imageURL: '../../../assets/images/teachers/Cherease.svg',
      role: 'Teacher',
    },
    {
      fullname: 'Jacky Coetzee ',
      class: 'Owl Class',
      imageURL: '../../../assets/images/teachers/Jacky.svg',
      role: 'Teacher',
    },
    {
      fullname: 'Chantel van Huyssteen',
      class: 'Mickey Klas',
      imageURL: '../../../assets/images/teachers/KleinChantel.svg',
      role: 'Teacher',
    },
    {
      fullname: 'Fiona Willemse',
      class: 'Gogga Klas',
      imageURL: '../../../assets/images/teachers/Fiona.svg',
      role: 'Teacher',
    },
    {
      fullname: 'Thea van Niekerk ',
      class: 'Jungle Class',
      imageURL: '../../../assets/images/teachers/Thea.svg',
      role: 'Teacher',
    },
    {
      fullname: 'Dalena Fitchat',
      class: 'Voeltjie Klas',
      imageURL: '../../../assets/images/teachers/Dalena.svg',
      role: 'Teacher',
    },
    {
      fullname: 'Marianna Willemse',
      class: 'Woodland Babies',
      imageURL: '../../../assets/images/teachers/Marianna.svg',
      role: 'Teacher',
    },
    {
      fullname: 'Lizzy',
      class: 'Woodland Babies',
      imageURL: '../../../assets/images/teachers/Lizzy.svg',
      role: 'Teacher',
    },
    {
      fullname: 'Christina Pheege',
      class: 'Woodland babies',
      imageURL: '../../../assets/images/assistents/Christina.svg',
      role: 'Assistant',
    },
    {
      fullname: 'Lorraine Nkwe',
      class: 'Voeltjie Klas',
      imageURL: '../../../assets/images/assistents/Lorraine.svg',
      role: 'Assistant',
    },
    {
      fullname: 'Mariekie Molebatsi',
      class: 'Jungle Class',
      imageURL: '../../../assets/images/assistents/Mariekie.svg',
      role: 'Assistant',
    },
    {
      fullname: 'Chantell Ansley ',
      class: 'Principal',
      imageURL: '../../../assets/images/teachers/Chantel.svg',
      role: 'Owner',
    },
    {
      fullname: 'Heather Beyneveldt',
      class: 'Fiances',
      imageURL: '../../../assets/images/teachers/heather.svg',
      role: 'Owner',
    },
  ];
}
