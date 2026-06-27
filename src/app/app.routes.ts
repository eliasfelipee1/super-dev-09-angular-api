import { Routes } from '@angular/router';

import { TarefaCadastrar } from './tarefas/tarefa-cadastrar/tarefa-cadastrar';
import { TarefaListar } from './tarefas/tarefa-listar/tarefa-listar';
import { TarefaEditar } from './tarefas/tarefa-editar/tarefa-editar';

import { ProjetoCadastrar } from './projetos/projeto-cadastrar/projeto-cadastrar';

import { RelatoriosFinanceiroCadastrar } from './relatorios-financeiros/relatorio-financeiro-cadastrar/relatorio-financeiro-cadastrar';

export const routes: Routes = [
  

  // Crud de tarefas 
  { path: 'tarefas', loadComponent: () => TarefaListar },
  { path: 'tarefas/cadastrar', loadComponent: () => TarefaCadastrar },
  { path: 'tarefas/editar/:id', loadComponent: () => TarefaEditar },
   //Crud de Projetos
  { path: 'projetos', loadComponent: () => ProjetoCadastrar },






  { path: 'relatorios-financeiros/cadastrar', loadComponent: () => RelatoriosFinanceiroCadastrar },

 
];