import React from 'react'
import Cliente from '../core/Cliente'
import { IconeEdicao, IconeLixo } from './Icones';

interface TabelaProps {
    clientes: Cliente[];
    clienteSelecionado?: (cliente: Cliente) => void;
    clienteExcluido?: (cliente: Cliente) => void;

}

const Tabela = (props: TabelaProps) => {

    const exibirAcoes = props.clienteSelecionado || props.clienteExcluido

    function renderCabecalho() {
        return (
            <tr>
                <th className={`text-left p-4`}>Código</th>
                <th className={`text-left p-4`}>Nome</th>
                <th className={`text-left p-4`}>Idade</th>
                {exibirAcoes ? <th className={`p-4`}>Ações</th> : false}
            </tr>
        )
    }

    function renderDadosClientes() {
        return props.clientes?.map( (cliente, i) => {
            return (
                    <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-emerald-200' : 'bg-emerald-100' }`}>
                        <td className={`text-left p-4`}>{cliente.id}</td>
                        <td className={`text-left p-4`}>{cliente.nome}</td>
                        <td className={`text-left p-4`}>{cliente.idade}</td>
                        {exibirAcoes ? renderAcoes(cliente) : false}
                    </tr>
            )
        });
    }
    
    function renderAcoes(cliente: Cliente) {
        return (
            <td className={`flex justify-center`}>
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                    flex justify-center items-center
                    text-blue-600 rounded-full p-2 mr-2
                    hover:bg-emerald-50 hover:border hover:border-emerald-400
                    `}>
                        {IconeEdicao}
                    </button>
                ) : false }
                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2
                    hover:bg-emerald-50 hover:border hover:border-emerald-400
                    `}>
                        {IconeLixo}
                    </button>
                    ) : false }
            </td>
        )
    }

    return (
        <table className='w-full rounded-xl overflow-hidden table-auto'>
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-emerald-500 to-emerald-800
            `}>
                {renderCabecalho()}
            </thead>
            <tbody>
                {renderDadosClientes()}
            </tbody>
        </table>
    )
}

export default Tabela;