import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: any = [
    new WishItem('To Learn Angular'),
    new WishItem('Get some tea', true),
    new WishItem('Find grass that cuts itself'),
  ];
  title = 'whislist';
  toggleItem() {
    console.log('clicked!');
  }
}
