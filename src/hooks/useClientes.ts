import { useState, useEffect } from 'react';
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from '../core/Cliente';
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTabelaOuForm from './useTabelaOuForm';

export default function useClientes() {

    

  const repo: ClienteRepositorio = new ColecaoCliente();
  
  const [cliente, setCliente] = useState<Cliente>(Cliente.clienteVazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const {tabelaVisivel ,formVisivel, exibirTabela, exibirForm} = useTabelaOuForm();


  useEffect(() => {
    listarClientes();
  }, []);
  

  async function listarClientes() {
    await repo.listarClientes().then((clientes) => {
      console.log('listando...', clientes);
      exibirTabela();  
      setClientes(clientes);
    })
  }

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
    exibirForm();
    setCliente(cliente);
  }

  async function excluirCliente(cliente: Cliente) {
    console.log('Excluindo...', cliente.nome);
    await repo.excluir(cliente);
    listarClientes();
  }

  function novoCliente() {
    console.log('novo cliente... ', cliente);
    exibirForm();
    setCliente(Cliente.clienteVazio());
  }

  async function salvarCliente(cliente: Cliente) {
    console.log('salvando... ', cliente);
    await repo.salvar(cliente)
    listarClientes();
  }

  return {
      cliente,
      clientes,
      novoCliente,
      salvarCliente,
      listarClientes,
      excluirCliente,
      clienteSelecionado,
      tabelaVisivel,
      formVisivel,
      exibirTabela,
      exibirForm,
    }

}

