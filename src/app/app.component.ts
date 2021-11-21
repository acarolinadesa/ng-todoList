import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng TodoList';
  tasks : Array<String> = [
    'item1',
    'item2'
  ]
  task : String = ''

  cadastrar () {
    this.tasks.push(this.task)
    this.task = ''
  }
}
