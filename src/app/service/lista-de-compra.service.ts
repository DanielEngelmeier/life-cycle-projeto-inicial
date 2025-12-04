import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[] = [
    {
      id: 1,
      nome: 'Queijo prato',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: false,
    },
    {
      id: 2,
      nome: 'Leite integral',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: false,
    },
    {
      id: 3,
      nome: 'Mamão papaia',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: true,
    },
  ];

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
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
}
