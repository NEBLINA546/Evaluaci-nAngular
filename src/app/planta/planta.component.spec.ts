/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { PlantaComponent } from './planta.component';
import { PlantaService } from './planta.service';
import { Planta } from './planta';

describe('BookListComponent', () => {
 let component: PlantaComponent;
 let fixture: ComponentFixture<PlantaComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ PlantaComponent ],
     providers: [ PlantaComponent ]
   })
   .compileComponents();
 }));


 beforeEach(() => {
   fixture = TestBed.createComponent(PlantaComponent);
   component = fixture.componentInstance;
   component.plantas = [
     new Planta(1, faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), 123, faker.lorem.sentence(), faker.lorem.sentence()),
     new Planta(2, faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), 224, faker.lorem.sentence(), faker.lorem.sentence()),
     new Planta(3, faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), 333, faker.lorem.sentence(), faker.lorem.sentence())
   ]

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component has a table", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(3);
 });




});