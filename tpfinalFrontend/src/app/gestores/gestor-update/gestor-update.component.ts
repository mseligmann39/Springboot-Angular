import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gestor } from '../gestor';
import { GestorService } from '../gestor.service';  

@Component({
  selector: 'app-gestor-update',
  templateUrl: './gestor-update.component.html',
  styleUrls: ['./gestor-update.component.css']
})
export class GestorUpdateComponent {

  gestor: Gestor = new Gestor();
  id!: number;

  constructor(
    private gestorService: GestorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Recogemos el ID que nos llega en la url desde el formulario
    this.id = this.activatedRoute.snapshot.params['id'];
    //Utilizamos el método de GestorService para obtener gestor
    this.gestorService.getGestor(this.id).subscribe(
      gestor => {
        this.gestor = gestor;
      }, 
      error => console.log(error));
  }

  //Metodo referenciado por el formulario HTML
  onSubmitForm() {
    this.gestorService.updateGestor(this.id, this.gestor).subscribe( 
      gestorData => {
        console.log(gestorData);
        this.redirectGestorList();
      }, 
      error => console.log(error));
  }

  //Redirección a lista de gestores
  redirectGestorList() {
    this.router.navigate(['/gestoreslist']);
  }
}
