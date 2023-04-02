import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  menu: { label: string; url: string }[] = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Random',
      url: '/random',
    },
  ];
}
