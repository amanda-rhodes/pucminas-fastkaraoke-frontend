import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplicationProvider} from "../../providers/application/application";

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  proximoPedido: any;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, private appProvider: ApplicationProvider) {
  }

  ngOnInit() {
    this.appProvider.getProximoPedido().subscribe(res => this.proximoPedido = res)
  }
}
