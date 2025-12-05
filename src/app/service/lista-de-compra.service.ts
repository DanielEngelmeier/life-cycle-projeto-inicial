import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  criarItem(nomeNovoItem: string) {
    const item = {
      id: this.getUltimoId() + 1,
      nome: nomeNovoItem,
      data: this.getDataHoraAtual(),
      comprado: false,
    };
    return item;
  }

  adicionarItem(nomeNovoItem: string) {
    const item = this.criarItem(nomeNovoItem);
    this.listaDeCompra.push(item);
    //this.atualizarLocalStorage();
  }

  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoDoItem,
      data: this.getDataHoraAtual(),
      comprado: itemAntigo.comprado,
    };

    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado);
    //this.atualizarLocalStorage();
  }

  getUltimoId() {
    return Math.max(...this.listaDeCompra.map((item) => Number(item.id)));
  }

  getDataHoraAtual() {
    const agora = new Date();

    const opcoesData: Intl.DateTimeFormatOptions = {
      weekday: 'long', // dia da semana por extenso
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };

    // Formata a data no padrão desejado
    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoesData);

    // Formata a hora
    const horaFormatada = agora.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });

    return `${dataFormatada} às ${horaFormatada}`;
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }
}
