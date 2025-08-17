import { Component } from '@angular/core';
import { Gestor } from '../gestor';
import { GestorService } from '../gestor.service'; 


@Component({
  selector: 'app-gestor-list',
  templateUrl: './gestor-list.component.html',
  styleUrls: ['./gestor-list.component.css']
})
export class GestorListComponent {
  gestores!: Gestor[]; // Lista de gestores

  constructor(private gestorService: GestorService) {}

  ngOnInit(): void {
    this.getGestores();
  }

  private getGestores() {
    this.gestorService.getGestores().subscribe(gestorData => {
      this.gestores = gestorData;
    });
  }

  updateGestor(id: number) {
    // Navegar a la página de actualización del gestor
    // Implementar la lógica de navegación aquí
  }

  deleteGestor(id: number) {
    this.gestorService.deleteGestor(id).subscribe(() => {
      console.log(`Gestor con ID ${id} eliminado`);
      this.getGestores(); // Recargar la lista de gestores tras el borrado
    });
  }
}
