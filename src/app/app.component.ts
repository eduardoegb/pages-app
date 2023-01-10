import { Component } from '@angular/core';

interface Image {
  title: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images: Image[] = [
    {
      title: 'Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80',
    },
    {
      title: 'Mountain',
      url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
    },
    {
      title: 'Lake',
      url: 'https://images.unsplash.com/photo-1559310589-2673bfe16970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Country',
      url: 'https://images.unsplash.com/photo-1433883669848-fa8a7ce070b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
  ];

  onClick(index: number) {
    this.currentPage = index;
  }

  onPreviousClick() {
    this.currentPage--;
  }

  onNextClick() {
    console.log('next');
    this.currentPage++;
  }

  checkWindowIndex(i: number) {
    return Math.abs(this.currentPage - i) < 5;
  }
}
