import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: any = [
    // new WishItem('To Learn Angular'),
    // new WishItem('Get some tea', true),
    // new WishItem('Find grass that cuts itself'),
  ];

  newWishText: string = '';
  title = 'whislist';

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText='';

    // todo: add wish to the items array
    // clear the text box
  }

  toggleItem(item : WishItem) {
    item.isCompleted =!item.isCompleted;
    console.log(item);
  }
}
