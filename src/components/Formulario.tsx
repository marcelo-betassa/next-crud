import React, { useState } from 'react'
import Cliente from '../core/Cliente';
import Botao from './Botao';
import Entrada from './Entrada';

interface FormularioProps {
    cliente: Cliente;
    clienteMudou?: (cliente: Cliente) => void;
    cancelado?: () => void;
}

const Formulario = (props: FormularioProps) => {
    // const cliente = Cliente.clienteVazio();
    // props.cliente.clienteVazio();
    const id = props.cliente?.id ?? null;
    const [nome,setNome] = useState(props.cliente?.nome ?? '');
    const [idade,setIdade] = useState(props.cliente?.idade ?? 0 );


    return (
        <div>
            {id ? (
                <Entrada texto='Código' valor={id} somenteLeitura={true} className='mb-5' />
                ): false}
            <Entrada texto='Nome' valor={nome} somenteLeitura={false} valorMudou={setNome} className='mb-3' />
            <Entrada texto='Idade' valor={idade} type={'number'} 
                somenteLeitura={false} valorMudou={setIdade} className='mb-3' />
            <div className='flex justify-end mt-7'>
                <Botao cor='blue' className='mr-3' onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar': 'Salvar'}    
                </Botao>
                <Botao onClick={props.cancelado}>Cancelar</Botao>

            </div>
        </div>
    )
}

export default Formulario;