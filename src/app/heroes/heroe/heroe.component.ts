import { Component } from "@angular/core";


@Component({
  selector: "app-heroe",
  templateUrl: "heroe.component.html"
})

export class HeroeComponent {
  alias: string = "Ironman";
  nombre: string = "Tony Stark";
  edad: number = 45;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad} años`;
  }

  cambiarHeroe(): void {
    this.alias = "Spiderman";
    this.nombre = "Peter Parker";
  }

  cambiarEdad(): void {
    this.edad = 20;
  }

}
