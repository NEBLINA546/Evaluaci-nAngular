/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantaService } from './planta.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { PlantaComponent } from './planta.component';
import { AppComponent } from '../app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Service: Planta', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [PlantaService],
      declarations: [
        AppComponent, PlantaComponent
      ],
    }).compileComponents();
  });

  it('should ...', inject([PlantaService], (service: PlantaService) => {
    expect(service).toBeTruthy();
  }));
});
