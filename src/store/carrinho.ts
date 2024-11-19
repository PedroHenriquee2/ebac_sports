import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    itens: [],
};

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.itens.push(action.payload);
        },
        removeItem: (state, action) => {
            state.itens = state.itens.filter(item => item.id !== action.payload.id);
        },
        clearCarrinho: (state) => {
            state.itens = [];
        },
    },
});

export const { addItem, removeItem, clearCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;