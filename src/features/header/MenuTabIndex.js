import { createSlice } from "@reduxjs/toolkit";

export const MenuTabSlice = createSlice({
    name: "MenuTabIndex",
    initialState: { value: "/home" },
    reducers: {
        setMenuTabIndex: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setMenuTabIndex } = MenuTabSlice.actions;
export default MenuTabSlice.reducer;