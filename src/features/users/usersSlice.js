import { createSlice } from "@reduxjs/toolkit";


const initialState = [
   { id: '0', name: 'Alkon Brown'},
   { id: '1', name: 'Mike Saman' },
   { id: '2', name: 'Robert Alison' }
]



const usersSlice = createSlice({

    name: 'users',
    initialState,
    reducers: {}
   
})

export const selectAllUsers = (state) => state.users;


export default usersSlice.reducer