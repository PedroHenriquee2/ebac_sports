import React from 'react'
import { useSelector } from 'react-redux'

const carrinho = () => {
    const itens = useSelector((state) => state.carrinho.itens);

    return (
        <div>
        <h2>Seu carrinho</h2>
        {items.length > 0 ? (
            items.map((item, index) => <div key={index}>{item.name}</div>)
            ) : (
            <p>O carrinho está vazio</p>
            )}
        </div>
    );
};

export default carrinho