import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { ProjetoModel } from '../models/projeto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjetoService {

  // cliente responsável por fazer a requisição para o back-end (API)
  private readonly http = inject(HttpClient);

  private readonly baseUrl = `${environment.apiUrl}api/v1/trabalho/projeto`;


cadastrar(projeto: ProjetoModel): Observable<ProjetoModel> {
  const url = this.baseUrl;

  return this.http.post<ProjetoModel>(url, projeto);
}

listar(): Observable<ProjetoModel[]> {
    const url = this.baseUrl;

    //fazer requisição par carregar a lista de tarefas
    return this.http.get<ProjetoModel[]>(url);

 }


  }

  
