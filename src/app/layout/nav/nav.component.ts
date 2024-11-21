import { Component } from '@angular/core';
import { Link } from '../../shared/models/link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

links: Link[] = [
  {
      name: 'test',  
      url : 'test'
  }
]

}
