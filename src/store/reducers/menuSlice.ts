import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface IMenuState {
  open: boolean;
  menuWidth: number;
}

// Define the initial state using that type
const initialState: IMenuState = {
  open: false,
  menuWidth: 240,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    changeOpen: (state) => {
      state.open = !state.open;
    },
  },
});

export const { changeOpen } = menuSlice.actions;
export default menuSlice.reducer;
