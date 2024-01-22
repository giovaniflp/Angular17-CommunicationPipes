import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComunicationComponent } from './app/components/comunication/comunication.component';
import { PipesComponent } from './app/components/pipes/pipes.component';
import { FilhoInputComponent } from './app/components/comunication/filho-input/filho-input.component';
import { FilhoOutputComponent } from './app/components/comunication/filho-output/filho-output.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ComunicationComponent, PipesComponent,FilhoInputComponent, FilhoOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'comunication-pipes';
}
