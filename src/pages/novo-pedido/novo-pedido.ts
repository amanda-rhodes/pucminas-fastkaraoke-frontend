import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplicationProvider } from "../../providers/application/application";
import { PedidosPage } from "../pedidos/pedidos";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-novo-pedido',
  templateUrl: 'novo-pedido.html'
})
export class NovoPedidoPage {
  novoPedido: any;
  infos: any;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, private appProvider: ApplicationProvider, private storage: Storage) {
    this.novoPedido = {
      nome: "",
      mesa: "",
      musica: "",
    };
    this.infos = this.novoPedido;

  }

  fazerPedido() {
    console.log(this.novoPedido);
    this.appProvider.postNovoPedido(this.novoPedido).subscribe(res => console.log(res));
    this.armazenamentoLocal();
    this.navCtrl.push(PedidosPage, {informacoes: this.infos});
  }


  armazenamentoLocal() {
      // set a key/value
      this.storage.set('nome', this.novoPedido.nome);
      this.storage.set('mesa', this.novoPedido.mesa);
      this.storage.set('musica', this.novoPedido.musica);

      // Or to get a key/value pair
      this.storage.get('nome').then((val) => {
          this.infos.nome = val;
      });
      this.storage.get('mesa').then((val) => {
          this.infos.mesa = val;
      });

  }
}
