
import React from 'react';

interface EntradaProps  {
    texto: string;
    type?: 'text'|'number'|'date'|'password';
    valor: any;
    somenteLeitura: boolean;
    className?: string;
    valorMudou?: (valor:any) => void;

}

const Entrada = (props: EntradaProps) => {
  return (
    <div className={`flex flex-col ${props.className}`}>
        <label className='mb-2'>{props.texto}</label>
        <input className={`
            border border-emerald-500 rounded-lg
            focus:outline-none bg-gray-200
            px-4 py-2
            ${props.somenteLeitura ? '' : 'focus:bg-white'}
        `}  type={props.type ?? 'text'} 
            value={props.valor} 
            readOnly={props.somenteLeitura}
            onChange={e => props.valorMudou?.(e.target.value)} />
    </div>
  )
}

export default Entrada;