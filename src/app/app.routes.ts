import { Routes } from '@angular/router';
import { AllTaskComponent } from './pages/all-task/all-task.component';
import { PendingTasksComponent } from './pages/pending-tasks/pending-tasks.component';
import { CompletedTasksComponent } from './pages/completed-tasks/completed-tasks.component';
import { TodoTasksComponent } from './pages/todo-tasks/todo-tasks.component';

export const routes: Routes = [
    {
        path:"",
        component:AllTaskComponent
    },
    {
        path:"importants",
        component:TodoTasksComponent
    },
    {
        path:"pending",
        component:PendingTasksComponent
    },
    {
        path:"completed",
        component:CompletedTasksComponent
    },
];
