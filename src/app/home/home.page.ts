import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular'
import { ServicioService } from '../api/servicio.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  datos: any;
  loading: any;
  constructor(public servicio: ServicioService,
    public loader: LoadingController) { }

  async ngOnInit() {
    this.loading = await this.loader.create({
      spinner: "lines",
      message: "Espere por favor...",
      duration: 0
    });
    await this.loading.present();
    this.servicio.getData().subscribe(m => {
      this.loading.dismiss(this.loader);
      this.datos = m;
    })
  }

  doRefresh(event) {
    setTimeout(() => {
      this.servicio.getData().subscribe(m => {
        this.datos = m;
        event.target.complete();
      })
    }, 2000);
  }
}
