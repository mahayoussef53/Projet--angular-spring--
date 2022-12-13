import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from './Product';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ProductService {
  private apiServerUrl = environment.apiBaseUrl;
  private apiServerDeleteUrl = environment.apiDeleteUrl;
  private apiServerAddUrl = environment.apiAddUrl;

  constructor(private http: HttpClient){}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/product/all`);
  }

  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiServerAddUrl}/product/add`, product );
  }

  public updateProduct(product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.apiServerUrl}/product/update`, product);
  }

  public deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerDeleteUrl}/product/delete/${productId}`);
  }
}
