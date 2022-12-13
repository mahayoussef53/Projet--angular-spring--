import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Client} from './Client';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ClientService {
  private apiServerUrl =  environment.apiALL;
  private apiServerDeleteUrl = environment.apiDell;
  private apiServerAddUrl = environment.apiADD;


  constructor(private http: HttpClient){}

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiServerUrl}/client/all`);
  }

  public addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiServerAddUrl}/client/add`, client);
  }

  public updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiServerUrl}/client/update`, client);
  }

  public deleteClient(clientId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerDeleteUrl}/client/delete/${clientId}`);
  }


}
