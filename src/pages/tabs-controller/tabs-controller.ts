import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { MusicasPage } from '../musicas/musicas';
import { PedidosPage } from '../pedidos/pedidos';
import { SobrePage } from '../sobre/sobre';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = InicioPage;
  tab2Root: any = MusicasPage;
  tab3Root: any = PedidosPage;
  tab4Root: any = SobrePage;
  constructor(public navCtrl: NavController) {
  }
  
}
