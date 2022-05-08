import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .textSuccess {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  showDetails = false;
  logs = [];

  toggleDetails() {
    this.showDetails = true;
    this.logs.push(this.logs.length + 1);
  }
}

