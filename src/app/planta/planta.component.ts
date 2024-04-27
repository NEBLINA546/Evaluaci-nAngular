import { Component, OnInit } from '@angular/core';
import { Planta } from './planta'
import { PlantaService } from './planta.service';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {

  constructor(private plantaService: PlantaService) { }
  plantas: Array<Planta> = [];

  getPlantas(){
    this.plantaService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
    });
  }
  ngOnInit() {
    this.getPlantas();
  }

  getTotalPlantasExterior(){
    return this.plantas.filter(
      planta => planta.tipo=="Exterior"
      )
    .length
  }

  getTotalPlantasInterior(){
    return this.plantas.filter(
      planta => planta.tipo=="Interior"
      )
    .length
  }

}
