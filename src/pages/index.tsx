import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import useClientes from '../hooks/useClientes'

export default function Home() {

  const {tabelaVisivel, 
        exibirTabela, 
        cliente,
        clientes,
        clienteSelecionado,
        novoCliente,
        salvarCliente,
        excluirCliente} =  useClientes();

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-600 to-emerald-500
      text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        {tabelaVisivel ? (
          <>
            <div className='flex justify-end'>
              <Botao onClick={() => novoCliente()} className='mb-4' cor='blue'>Novo cliente</Botao>
            </div>
            <Tabela clientes={clientes} 
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={excluirCliente}/>
          </>
          ) : (
            <Formulario cliente={cliente}  cancelado={() => exibirTabela()} clienteMudou={salvarCliente}/>
          )}
      </Layout>
    </div>
  )
}
