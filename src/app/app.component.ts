import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonasstandaloneComponent } from "./components/personasstandalone/personasstandalone.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonasstandaloneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'algularstandalone';
}
