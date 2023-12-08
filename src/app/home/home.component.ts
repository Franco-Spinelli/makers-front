import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Maker, Product } from '../model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  makers: Maker[] = [];
  products: Product[] = [];
  updateProduct: FormGroup;
  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.updateProduct = this.fb.group({
     name: new FormControl(''),
     price: new FormControl(''),
    makerName: new FormControl('')
    });
  }
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
  sendProduct(name:string) {
    const updateData = this.updateProduct.value;
    this.updateProduct.get('makerName')?.setValue(name);
    console.log(this.updateProduct.get('maker.id')?.value);
    
    this.apiService.updateProduct(this.updateProduct.value).subscribe(
      (response) => {
        console.log('Successful update:', response);
      },
      (error) => {
        console.error('Error updating:', error);
      }
    );
  }
}
