import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("/api/products");
    // return [
    //   {
    //     name: "Makrama 1",
    //     category: "Makramy",
    //     img: "/assets/bor.jpg",
    //     description: "Makrama w rozmiarze XL, kolor bordowy",
    //     price: 299.00,
    //     currency: "PLN"
    //   },
    //   {
    //     name: "Makrama 2",
    //     category: "Makramy",
    //     img: "/assets/bez.jpeg",
    //     description: "Makrama w rozmiarze L, kolor beżowy",
    //     price: 259.00,
    //     currency: "PLN"
    //   },
    //   {
    //     name: "Makrama 3",
    //     category: "Makramy",
    //     img: "/assets/cz.jpg",
    //     description: "Makrama w rozmiarze M, kolor czarny",
    //     price: 199.00,
    //     currency: "PLN"
    //   }
    // ];
  }
}
