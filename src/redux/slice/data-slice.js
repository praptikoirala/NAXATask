import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: '',
        isLoading: false
    },
    reducers: {
        fetchData: (state) => {
            state.isLoading = true;
        },
        getData: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;    
        }
    }
})

export const { fetchData, getData } = dataSlice.actions;
export default dataSlice.reducer;