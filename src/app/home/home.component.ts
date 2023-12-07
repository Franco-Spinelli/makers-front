import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Maker, Product } from '../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  makers: Maker[] = [];
  products: Product[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit() {
   this.getData();
  }

  getData(){
    this.apiService.getData().subscribe(
      (response) => {
        this.makers = response;
        console.log(this.makers)
      }
    )
    this.apiService.getProduct().subscribe(
      (data) => {
        this.products = data;
        console.log(this.products);
      }
    )
  }
}
