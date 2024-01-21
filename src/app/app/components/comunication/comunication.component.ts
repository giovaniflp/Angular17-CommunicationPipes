import { Component, signal } from '@angular/core';
import { FilhoOutputComponent } from './filho-output/filho-output.component';
import { FilhoInputComponent } from './filho-input/filho-input.component';

@Component({
  selector: 'app-comunication',
  standalone: true,
  imports: [FilhoOutputComponent, FilhoInputComponent],
  templateUrl: './comunication.component.html',
  styleUrl: './comunication.component.css'
})
export class ComunicationComponent {
  public paiDados = signal("Dados do Pai Passados em TS")

  public outputDados = signal("Output sem valor")
}
