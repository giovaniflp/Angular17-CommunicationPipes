import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';
import { CustomPipesPipe } from './custom-pipes.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, CustomPipesPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  public date = signal(new Date())

  public jsonObject = signal({pessoa1:
    {nome: 'João', idade: 20, cidade: 'São Paulo'},
    pessoa2:
    {nome: 'Maria', idade: 35, cidade: 'Belo Horizonte'},}
  )

  public testeNumero = signal(69.9)

  public nomelegal = signal('João')
}
