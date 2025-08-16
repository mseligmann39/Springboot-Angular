import { Component,OnInit } from '@angular/core';
import { Gestor } from '../gestor';
import { GestorService } from "../gestor.service";

@Component({
  selector: 'app-gestor-list',
  templateUrl: './gestor-list.component.html',
  styleUrls: ['./gestor-list.component.css']
})
export class GestorListComponent implements OnInit{
  gestores!:Gestor[]
  router: any;
  constructor(private gestorService : GestorService){}

  ngOnInit(): void {
    this.getGestor();
  }

  private getGestor(){
    this.gestorService.findAllGestores().subscribe(gestorData => {this.gestores = gestorData});
  }

  updateGestor(id: number){
    //Lo envía a través de app-routing.module.ts
    this.router.navigate(['updategestor', id]);
  }

  deleteGestor(id: number){
    this.gestorService.deleteGestor(id).subscribe( 
      gestorData => {
      console.log(gestorData);
      //Volvemos a recuperar los Users tras el borrado
      this.getGestor();
    })
  }

}
