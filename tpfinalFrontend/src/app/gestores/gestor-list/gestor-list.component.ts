import { Component } from '@angular/core';
import { Gestor } from '../gestor';
import { GestorService } from '../gestor.service'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-gestor-list',
  templateUrl: './gestor-list.component.html',
  styleUrls: ['./gestor-list.component.css']
})
export class GestorListComponent {
  gestores!: Gestor[]; // Lista de gestores

   // Inyecta el servicio y el router
  constructor(private gestorService: GestorService, private router: Router) { }

  ngOnInit(): void {
    this.getGestores();
  }

  private getGestores() {
    this.gestorService.getGestores().subscribe(gestorData => {
      this.gestores = gestorData;
    });
  }

  actualizarGestor(id: number) {
  // Usamos el router para navegar a la ruta de edición que definimos
  this.router.navigate(['/gestores/editar', id]);
}

eliminarGestor(id: number) {
  this.gestorService.deleteGestor(id).subscribe(response => {
    console.log(response);
    // Volvemos a cargar la lista para que el gestor eliminado desaparezca
    this.getGestores();
  });
}

 }
