import { createSlice } from '@reduxjs/toolkit';


const initialState = [];

export const expenseSlice = createSlice({
name: 'Expense',
initialState,
reducers : {
    addExpense: (state , action)=>{

    },
    editExpense: (state , action)=>{

    },
    removeExpense: (state , action)=>{

    }
}
});

export const {addExpense , editExpense , removeExpense} = expenseSlice.actions;

export default expenseSlice.reducer ;