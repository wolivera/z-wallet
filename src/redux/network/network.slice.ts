import { createSlice } from "@reduxjs/toolkit";
import { loadNetwork } from "./network.thunk";

// Define a type for the slice state
export type Network = {
  name: string;
  rpc: string;
  tx_explorer?: string;
};

interface NetworkState {
  availableNetworks: Network[];
  selectedNetwork?: Network;
  loading: boolean;
  keystore: string | boolean;
}

// Define the initial state using that type
const initialState: NetworkState = {
  availableNetworks: [
    { name: "Offline", rpc: "offline" },
    { name: "Local RPC", rpc: "http://127.0.0.1:8545" },
    {
      name: "Ropsten Testnet",
      rpc: "https://ropsten.infura.io/GjiCzFxpQAUkPtDUpKEP",
      tx_explorer: "https://ropsten.etherscan.io/tx/",
    },
  ],
  selectedNetwork: undefined,
  keystore: false,
  loading: false,
};


export const networkSlice = createSlice({
  name: "network",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // loadNetwork: (state, action: PayloadAction<Network>) => {
    //   state.selectedNetwork = action.payload;
    // },
    // loadNetworkError: (state, action: PayloadAction<string>) => {
    //   const error = action.payload;
    //   // eslint-disable-next-line react-hooks/rules-of-hooks
    //   const dispatch = useAppDispatch();

    //   if (error !== "Offline") {
    //     const err =
    //       error.indexOf("Invalid JSON RPC response from host provider") >= 0
    //         ? `${error}, Check Internet connection and connectivity to RPC`
    //         : error;

    //     dispatch(snackbarSuccess(err));
    //   }
    //   state.error = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(loadNetwork.pending, (state) => {
      state.loading = true
    })
    builder.addCase(loadNetwork.fulfilled, (state, { payload }) => {
      state.selectedNetwork = payload;
      state.loading = false;
    })
    builder.addCase(loadNetwork.rejected, (state) => {
      state.loading = false;
    })
  }
});

// export const { loadNetworkError } = networksSlice.actions;

export default networkSlice.reducer;
