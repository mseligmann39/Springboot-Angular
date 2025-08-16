import { Component } from '@angular/core';
import { Gestor } from '../gestor';
import { GestorService } from '../gestor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-gestor',
  templateUrl: './create-gestor.component.html',
  styleUrls: ['./create-gestor.component.css']
})
export class CreateGestorComponent {

  gestor: Gestor = new Gestor();

  constructor(
    private gestorService: GestorService,
    private router:Router
  ){}

  ngOnInit(): void{

  }

  onSubmitForm(){
    console.log(this.gestor);
    this.commitGestor();
  }

  commitGestor(){
    this.gestorService.createGestor(this.gestor).subscribe(
      clienteData =>{
        console.log(clienteData);
        this.redirectGestorList();
      },
      error => console.log(error));
    
  }

  redirectGestorList(){
    this.router.navigate(['/gestorList'])
  }



}
