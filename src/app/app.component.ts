import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/layouts/aside/aside.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { PageTitleComponent } from './components/layouts/page-title/page-title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,AsideComponent,HeaderComponent,PageTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todoApp';


  ngOnInit(){
  }

}
