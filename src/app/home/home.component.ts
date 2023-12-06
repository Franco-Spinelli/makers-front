import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  datos: any[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    // Llama al método getDatos() y suscríbete al observable
    this.apiService.getDatos().subscribe(
      (response) => {
        // Asigna los datos a la propiedad datos
        this.datos = response;
        console.log(this.datos)
      }
    );
  }

}
