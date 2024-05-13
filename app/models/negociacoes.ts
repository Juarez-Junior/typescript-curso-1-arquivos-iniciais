import { Negociacao } from './negociacao';

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }
  Lista(): Array<Negociacao> {
    return this.negociacoes;
  }
}
