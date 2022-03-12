import React from 'react'


interface BotaoProps {
    cor?: 'green'|'blue'|'red'|'gray'
    className?: string;
    children: any;
    onClick?: () => void;
}


const Botao = (props: BotaoProps) => {

    const cor = props.cor ? props.cor : 'gray'

return (
    <button onClick={props.onClick} className={`
        bg-gradient-to-r from-${cor}-400 to-${cor}-700
        text-white px-4 py-2 rounded-md
        ${props.className} 
    `}>
        {props.children}
    </button>
  )
}

export default Botao;