const { createSlice } = require('@reduxjs/toolkit');

const carttSlice = createSlice({
    name: "cart",
    initialState : [],
    reducers: {
        add(state, action){
           state.push(action.payload)
      },
         remove(state, action){
           state.filter((item)=>item.id !== action.payload)
        },
    }
});
// const { actions, reducer } = createSlice.action;
export const { add,remove } =  carttSlice.actions;
export default carttSlice.reducer;