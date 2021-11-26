import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  @Input() tasks: Array<String> = [];
  @Output() deleteById = new EventEmitter<any>();
  @Output() editById = new EventEmitter<any>();
  editIndex: any = null;
  text: String = '';

  deletar (index: any) {
    this.deleteById.emit(index);
  }

  edit (index: any) {
    this.editIndex = index;
    this.text = this.tasks[index];
  }

  submit (index: any, text: String) {
    this.editIndex = null;
    this.editById.emit({ index, text });
  }
}
