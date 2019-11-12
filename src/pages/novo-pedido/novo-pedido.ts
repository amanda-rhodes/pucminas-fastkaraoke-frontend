import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplicationProvider } from "../../providers/application/application";
import {PedidosPage} from "../pedidos/pedidos";

@Component({
  selector: 'page-novo-pedido',
  templateUrl: 'novo-pedido.html'
})
export class NovoPedidoPage {
  novoPedido: any;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, private appProvider: ApplicationProvider) {
    this.novoPedido = {
      nome: "",
      mesa: "",
      musica: "",
    }
  }

  fazerPedido() {
    console.log(this.novoPedido);
    this.appProvider.postNovoPedido(this.novoPedido).subscribe(res => console.log(res));
    this.navCtrl.push(PedidosPage);
  }
  
}
