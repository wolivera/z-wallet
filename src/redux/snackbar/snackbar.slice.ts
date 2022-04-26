import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state

interface SnackbarState {
  snackbarOpen: boolean;
  snackbarMessage: string;
  severity: 'success' | 'info' | 'error';
}

// Define the initial state using that type
const initialState: SnackbarState = {
  snackbarOpen: false,
  snackbarMessage: '',
  severity: 'info',
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    snackbarSuccess: (state, action: PayloadAction<string>) => {
      state.snackbarOpen = true;
      state.snackbarMessage = action.payload;
      state.severity = 'success';
    },
    snackbarError: (state, { payload }) => {
      state.snackbarOpen = true;
      state.snackbarMessage = payload || 'Something went wrong';
      state.severity = 'error';
    },
    snackbarClear: (state) => {
      state.snackbarOpen = false;
      state.snackbarMessage = '';
    }
  }
});

export const { snackbarSuccess, snackbarClear, snackbarError } = snackbarSlice.actions;

export default snackbarSlice.reducer;
