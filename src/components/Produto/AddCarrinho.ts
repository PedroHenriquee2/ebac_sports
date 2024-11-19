import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/carrinho';

const AddToCarrinhoButton = ({ product }) => {
    const dispatch = useDispatch();

    return (
    <button onClick={() => dispatch(addItem(product))}>
        Adicionar ao carrinho
    </button>
    );
};

export default AddToCarrinhoButton;
