import { Component } from '@angular/core';
import { Gestor } from '../gestor';
import { GestorService } from '../gestor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestor-create',
  templateUrl: './gestor-create.component.html',
  styleUrls: ['./gestor-create.component.css']
})
export class GestorCreateComponent {

  gestor: Gestor = new Gestor();

  constructor(
    private gestorService: GestorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmitForm() {
    console.log(this.gestor);
    this.commitGestor();
  }

  commitGestor() {
    this.gestorService.createGestor(this.gestor).subscribe(
      gestorData => {
        console.log(gestorData);
        this.redirectGestorList();
      },
      error => console.log(error)
    );
  }

  redirectGestorList() {
    this.router.navigate(['/gestorList']);
  }
}
