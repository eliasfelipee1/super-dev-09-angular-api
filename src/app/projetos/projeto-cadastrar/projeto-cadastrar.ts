import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjetoModel } from '../../models/projeto.model';
import { ProjetoService } from '../../services/projeto.service';

@Component({
  selector: 'app-projeto-cadastrar',
  imports: [FormsModule],
  templateUrl: './projeto-cadastrar.html',
  styleUrl: './projeto-cadastrar.css',
})
export class ProjetoCadastrar {

  private readonly projetoService = inject(ProjetoService);
  private readonly router = inject(Router);

  
projeto = signal<ProjetoModel>({
  id: "",
  nome: "",
  codigoProjeto: "",
  custoEstimado: 0
});

  salvar(): void {
    this.projetoService.cadastrar(this.projeto()).subscribe({
      next: () => {
        alert("Projeto cadastrado com sucesso");
        // this.router.navigate(['/projeto-listar']);
      },
      error: erro => {
        console.error("Erro ao cadastrar projeto:", erro);
        alert("Ocorreu um erro ao cadastrar o projeto");
      }
    });
  }

}