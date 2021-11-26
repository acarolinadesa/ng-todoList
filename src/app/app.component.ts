import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng TodoList';
  tasks : Array<String> = []

  addToList (event: any) {
    this.tasks.push(event)
  }

  removeFromList (event: any) {
    this.tasks.splice(event, 1)
  }

  editFromList (event: any) {
    this.tasks.splice(event.index, 1, event.text)
  }
}
