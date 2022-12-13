import { Component, OnInit } from '@angular/core';
import { Product} from './Product';
import { ProductService } from './Product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {Client} from './Client';
import {ClientService} from './Client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public products: Product[];
  public editProduct: Product;
  public deleteProduct: Product;

  public clients: Client[];
  public editClient: Client;
  public deleteClient: Client;


  constructor(private productService: ProductService, private clientService: ClientService){}

  ngOnInit() {
    this.getProducts();
    this.getClients();
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        console.log(this.products);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getClients(): void {
    this.clientService.getClients().subscribe(
      (response: Client[]) => {
        this.clients = response;
        console.log(this.clients);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddProduct(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.productService.addProduct(addForm.value).subscribe(
      (response: Product) => {
        console.log(response);

        this.getProducts();
        addForm.reset();


      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  public onAddClient(addFormm: NgForm): void {
    document.getElementById('add-form').click();
    this.clientService.addClient(addFormm.value).subscribe(
      (response: Client) => {
        console.log(response);

        this.getClients();
        addFormm.reset();


      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addFormm.reset();
      }
    );
  }

  public onUpdateProduct(product: Product): void {
    this.productService.updateProduct(product).subscribe(
      (response: Product) => {
        console.log(response);
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onUpdateClient(client: Client): void {
    this.clientService.updateClient(client).subscribe(
      (response: Client) => {
        console.log(response);
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(
      (response: void) => {
        console.log(response);
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onDeleteClient(clientId: number): void {
    this.clientService.deleteClient(clientId).subscribe(
      (response: void) => {
        console.log(response);
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchProducts(key: string): void {
    console.log(key);
    const results: Product[] = [];
    for (const product of this.products) {
      if (product.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
|| product.price.toLowerCase().indexOf(key.toLowerCase()) !== -1
|| product.quantity.toLowerCase().indexOf(key.toLowerCase()) !== -1)
      {
        results.push(product);
      }
    }
    this.products = results;
    if (results.length === 0 || !key) {
      this.getProducts();
    }
  }
  public searchClients(key: string): void {
    console.log(key);
    const results: Client[] = [];
    for (const client of this.clients) {
      if (client.name.toLowerCase().indexOf(key.toLowerCase()) !== -1

        || client.ville.toLowerCase().indexOf(key.toLowerCase()) !== -1
        // tslint:disable-next-line:indent
        || client.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1)
        // tslint:disable-next-line:indent

// tslint:disable-next-line:indent

      {
        results.push(client);
      }
    }
    this.clients = results;
    if (results.length === 0 || !key) {
      this.getProducts();
    }
  }


  public onOpenModal(product: Product, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editProduct = product;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteProduct = product;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }


    container.appendChild(button);
    button.click();
  }
  public onOpenModall(client: Client, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addModal');
    }
    if (mode === 'edit') {
      this.editClient = client;
      button.setAttribute('data-target', '#updateModal');
    }
    if (mode === 'delete') {
      this.deleteClient = client;
      button.setAttribute('data-target', '#deleteModal');
    }


    container.appendChild(button);
    button.click();
  }


}
