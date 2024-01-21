import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-filho-output',
  standalone: true,
  imports: [],
  templateUrl: './filho-output.component.html',
  styleUrl: './filho-output.component.css'
})
export class FilhoOutputComponent {
  @Output() public OutputDados = new EventEmitter()

  public sendOutputDados() {
    this.OutputDados.emit("Dados Output em função")
  }
}
