import { createAsyncThunk } from "@reduxjs/toolkit";

import { Network } from "./network.slice";
// import Web3 from "web3";
import { snackbarError } from "../snackbar/snackbar.slice";
// import { useAppSelector } from "../hooks";
// import { RootState } from "../store";

// const web3 = new Web3();\

interface LoadNetworkPayload {
  network: Network;
};

export const loadNetwork = createAsyncThunk(
  "network/loadNetwork",
  async (payload: LoadNetworkPayload, { dispatch }) => {
    try {

      const { network } = payload;
      const rpcAddress = network.rpc;

      if (!rpcAddress) {
        throw new Error(`${network.name} network not found`);
      }

      if (network.name === "Offline") {
        // web3.setProvider(null);
        // yield put(loadNetworkError("Offline"));
        return network;
      }

      // eslint-disable-next-line react-hooks/rules-of-hooks
      // const keystore = useAppSelector(
      //   (state: RootState) => state.network.keystore
      // );
      const keystore = ''

      if (keystore) {
        // const provider = new SignerProvider(rpcAddress, {
        //   signTransaction: keystore.signTransaction.bind(keystore),
        //   accounts: (cb) => cb(null, keystore.getAddresses()),
        // });
        // web3.setProvider(provider);
        // function getBlockNumberPromise() {
        //   // eslint-disable-line no-inner-declarations
        //   return new Promise((resolve, reject) => {
        //     web3.eth.getBlockNumber((err, data) => {
        //       if (err !== null) return reject(err);
        //       return resolve(data);
        //     });
        //   });
        // }
        // const blockNumber = yield call(getBlockNumberPromise);
        // yield call(timer, 600);
        // yield put(loadNetworkSuccess(blockNumber));
        // // actions after succesfull network load :
        // yield put(checkBalances());
        // yield put(getExchangeRates());
        // // clear token list if changed network
        // const prevNetwork = yield select(makeSelectPrevNetworkName());
        // if (prevNetwork !== action.networkName) {
        //   yield put(updateTokenInfo(keystore.getAddresses, action.tokenInfo));
        // }
        // const usedFaucet = yield select(makeSelectUsedFaucet());
        // if (action.networkName === "Ropsten Testnet" && !usedFaucet) {
        //   yield put(checkFaucet());
        // }
        return network;
      } else {
        throw new Error(
          "Keystore not initiated - Create wallet before connecting"
        );
      }
    } catch (err: any) {
      const errorString = err?.message || "Error loading network";

      // const dispatch = useAppDispatch();
      dispatch(snackbarError(errorString));

      throw new Error(errorString);
    }
  }
);
