import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { TaskTitleComponent } from '../task-title/task-title.component';
import { PageTitleComponent } from '../../components/layouts/page-title/page-title.component';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-all-task',
  standalone: true,
  imports: [FormsModule,PageTitleComponent,TaskTitleComponent],
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.scss',
})
export class AllTaskComponent {
  httpService = inject(HttpService);
  stateService = inject(StateService)
  taskData: any = ([] = []);
  filtertaskData: any = ([] = []);
  constructor() {}
  newTasktitle = '';
  newTaskDescription = '';
  addModal: boolean = false;

  ngOnInit() {
    this.stateService.searchSubject.subscribe((value)=>{
      if(value){
      this.taskData = this.filtertaskData.filter((x:any)=>x.title.oLowerCase().includes(value.toLowerCase()))
      }else{
        this.taskData = this.filtertaskData ;
      }
    })
    this.getAllTask();
  }

  addTask() {
    if (this.newTasktitle && this.newTaskDescription) {
      const task = {
        title: this.newTasktitle,
        description: this.newTaskDescription,
        status: 'To Do',
      };
      console.log('Here is the Data', task);
      this.httpService.addTask(task).subscribe((res) => {
        debugger;
        console.log('added');
        this.newTasktitle = '';
        this.newTaskDescription = '';
        this.getAllTask();
      });
    } else {
      alert('Please Enter the Task Details');
    }
  }
  cancelTask() {}
  check(selected: any) {
    if (selected.completed) {
      this.onComplete(selected);
    }else{
      this.markPending(selected);
    }
  }
  onComplete(task: any) {
    task.completed = 'true';
    task.status = 'Completed';
    console.log('commplte', task);
    this.httpService.updateTask(task).subscribe((res) => {
      console.log('dattata update', res);
    });
  }
  onImportant(task: any) {
    console.log('commplte', task);
    task.important = 'true';
    task.status = 'Important';
    this.httpService.updateTask(task).subscribe((res) => {
      console.log('dattata update', res);
    });
  }
  markPending(task: any) {
    console.log('commplte', task);
    task.pending = 'true';
    task.status = 'Pending';
    this.httpService.updateTask(task).subscribe((res) => {
      console.log('dattata update', res);
    });
  }
  search(task:any){}
  getAllTask() {
    this.httpService.getAllTask().subscribe((res: any) => {
      this.taskData = this.filtertaskData = res;
      console.log('added', this.taskData);
    });
  }
}
