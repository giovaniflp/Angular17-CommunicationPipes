import { Component, Input, signal } from '@angular/core';

function toUpperCase(value: string): string {
  return value.toUpperCase();
}

@Component({
  selector: 'app-filho-input',
  standalone: true,
  imports: [],
  templateUrl: './filho-input.component.html',
  styleUrl: './filho-input.component.css'
})
export class FilhoInputComponent {

  public Dados = signal("Sem dados")

  @Input({
    required: true,
    // O input no lado do pai tem que ser chamado obrigatoriamente e ser passado algum valor
    transform: toUpperCase
    // O transform é uma função que vai ser chamada toda vez que o valor do input for alterado
  }) set inputDados(value: string) {
    this.Dados.set(value)
  }
}
