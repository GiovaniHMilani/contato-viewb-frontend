import { Component, OnInit } from '@angular/core';
import { Contato } from '../shared/contato';
import { ContatoService } from '../shared/contato.service';
import { Observable } from 'rxjs';
import { ContatoDataService } from '../shared/contato-data.service';
import { MatDialog } from '@angular/material';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  contatos: Observable<any>;

  constructor(
    private dialog: MatDialog,
    private contatoService: ContatoService,
    private contatoDataService: ContatoDataService
  ) { }

  ngOnInit() {
    this.contatos = this.contatoService.getAll();
  }

  delete(key: string) {
    this.contatoService.delete(key);
  }

  edit(contato: Contato, key: string) {
    this.dialog.open(EditComponent, {
      width: '50%',
    })
    this.contatoDataService.changeContato(contato, key);
  }

  add(){
    this.dialog.open(EditComponent, {
      width: '50%',
    });
  }

}
