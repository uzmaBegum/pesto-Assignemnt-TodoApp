import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-title',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-title.component.html',
  styleUrl: './task-title.component.scss',
})
export class TaskTitleComponent {
  @Input() taskData: any[] = [];
  @Output() markedImportant = new EventEmitter<any>();
  @Output() markedComplete = new EventEmitter<any>();
  @Output() markedPending = new EventEmitter<any>();

  ngOnInit() {
    console.log('taskData', this.taskData);
  }
  markImportant(task: any) {
    this.markedImportant.emit(task);
  }
  markCompleted(task: any) {
    this.markedComplete.emit(task);
  }
  markPending(task: any) {
    if (!task.completed) this.markedPending.emit(task);
    else alert('Already Completed the Task')
  }
}
