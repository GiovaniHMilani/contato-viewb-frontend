import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContatoService } from './contatos/shared/contato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  busca: string;

  constructor(
    private dialog: MatDialog,
    private contatoService: ContatoService,
  ) {

  }

  onSubmit() {

  }
}
