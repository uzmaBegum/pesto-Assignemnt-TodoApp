import { Component, inject } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { TaskTitleComponent } from '../task-title/task-title.component';
import { PageTitleComponent } from '../../components/layouts/page-title/page-title.component';

@Component({
  selector: 'app-pending-tasks',
  standalone: true,
  imports: [TaskTitleComponent,PageTitleComponent],
  templateUrl: './pending-tasks.component.html',
  styleUrl: './pending-tasks.component.scss'
})
export class PendingTasksComponent {
  httpService = inject(HttpService);
  taskData: any = []= [];
  constructor() {}
  newTasktitle = '';
  newTaskDescription = '';
  addModal:boolean =false;

  ngOnInit() {
    this.getAllTask();
  }
  getAllTask(){
    this.httpService.getAllTask().subscribe((res:any) => {
      this.taskData = res.filter((x: { pending: any; }) => x.pending);
      console.log('added',this.taskData);
    });
  }
  onComplete(task:any){
    task.completed = true;
    console.log('commplte',task);
    const data = {
      title :this.newTasktitle,
      description:this.newTaskDescription
    }
    this.httpService.updateTask(task).subscribe((res: any)=>{
    console.log('dattata update',res)
    })
  }
  onImportant(task:any){
    console.log('commplte',task)
    task.important = true;

    const data = {
      title :this.newTasktitle,
      description:this.newTaskDescription,
    }
    this.httpService.updateTask(task).subscribe((res: any)=>{
    console.log('dattata update',res)
    })
  }
 
}
