import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NovoPedidoPage } from '../novo-pedido/novo-pedido';
import { ApplicationProvider } from "../../providers/application/application";
import { Badge } from '@ionic-native/badge';

@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html'
})
export class PedidosPage {
  pedidos: any;
  infosDoNovoPedido: any;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(
      public navCtrl: NavController,
      private appProvider: ApplicationProvider,
      public navParams: NavParams,
      private badge: Badge
  ) {
      this.infosDoNovoPedido = navParams.get('informacoes');
  }
  goToNovoPedido(params){
    if (!params) params = {};
    this.navCtrl.push(NovoPedidoPage);
  }

  ngOnInit() {
    this.appProvider.getPedidos().subscribe(
        res => {
          this.pedidos = res;
          this.badge.set(this.pedidos.length);
    });
  }

}
