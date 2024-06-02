import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
httpClient =inject(HttpClient)
  constructor() { }

  addTask(data:any){
    return this.httpClient.post("http://localhost:3000/tasks",{
     title: data.title,
     description :data.description,
     status:data.status
    });
  }

  getAllTask(){
    return this.httpClient.get("http://localhost:3000/tasks",{
     });
  }

  updateTask(data:any){
    return this.httpClient.put("http://localhost:3000/tasks/"+ data.id,data);
  }
}
