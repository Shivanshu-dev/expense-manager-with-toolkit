import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    name:'',
    email:'',
    password:''
  }


  export const counterSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
      registerUser: (state , action) => {
        state.name = action.payload.name
        state.email = action.payload.email
        state.password = action.payload.password
        localStorage.setItem('User' , {name:action.payload.name , email:action.payload.email , password:action.payload.password});
      },
      loginUser: (state , action) => {
        state.name = action.payload.name
        state.email = action.payload.email
        state.password = action.payload.password
      },
      logoutUser: (state, action) => {
        state = {}
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { registerUser , loginUser , logoutUser } = counterSlice.actions
  
  export default counterSlice.reducer