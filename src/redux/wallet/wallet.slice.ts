import { createSlice } from "@reduxjs/toolkit";
import { generateKeystore, generateSeed } from "./wallet.thunk";

interface WalletState {
  loading: boolean;
  seed?: Buffer;
  password?: string;
  mnemonic?: string;
}

// Define the initial state using that type
const initialState: WalletState = {
  password: undefined,
  seed: undefined,
  mnemonic: undefined,
  loading: false,
};


export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(generateSeed.pending, (state) => {
      state.loading = true
    })
    builder.addCase(generateSeed.fulfilled, (state, { payload }) => {
      state.password = payload.password;
      state.mnemonic = payload.mnemonic;
      state.loading = false;
    })
    builder.addCase(generateSeed.rejected, (state) => {
      state.loading = false;
    })

    builder.addCase(generateKeystore.pending, (state) => {
      state.loading = true
    })
    builder.addCase(generateKeystore.fulfilled, (state, { payload }) => {
      // state.password = payload.password;
      // state.mnemonic = payload.mnemonic;
      state.loading = false;
    })
    builder.addCase(generateKeystore.rejected, (state) => {
      state.loading = false;
    })
  }
});

export default walletSlice.reducer;
