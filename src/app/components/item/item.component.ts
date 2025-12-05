import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {
    console.log('OnInit()');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges()');
  }

  ngOnDestroy() {
    console.log('deletado');
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  comprarItem() {
    this.item.comprado = !this.item.comprado;
  }

  deletarItem() {
    console.log('deletando');
    this.emitindoIdParaDeletar.emit(this.item.id);
  }
}
