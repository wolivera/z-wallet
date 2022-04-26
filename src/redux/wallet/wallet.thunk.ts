import { createAsyncThunk } from "@reduxjs/toolkit";
import * as bip39 from "bip39";
import generateString from "../../utils/crypto";
import { snackbarError } from "../snackbar/snackbar.slice";
import { RootState } from "../store";
// import { useAppSelector } from "../hooks";
// import { RootState } from "../store";

export const generateSeed = createAsyncThunk(
  "wallet/generateSeed",
  async (_, { dispatch }) => {
    try {
      const password = generateString(12);
      const mnemonic = bip39.generateMnemonic();

      // const seed = await bip39.mnemonicToSeedSync(password);

      return { mnemonic, password };
    } catch (err: any) {
      console.log(err);
      const errorString = err?.message || "Error loading seed";

      dispatch(snackbarError(errorString));

      throw new Error(errorString);
    }
  }
);

export const generateKeystore = createAsyncThunk(
  "wallet/generateKeystore",
  async (payload, { dispatch, getState }) => {
    try {
      const state = getState() as RootState;
      const { mnemonic, password } = state.wallet;
      console.log('state', state.wallet.mnemonic);
      // const password = yield select(makeSelectPassword());
      // const seedPhrase = yield select(makeSelectSeed());
      const opt = {
        password,
        mnemonic,
        hdPathString: "m/44'/60'/0'/0",
      };
      // // allow time to render components before cpu intensive tasks:
      // yield call(timer, 300);

      // function keyFromPasswordPromise(param) {
      //   // eslint-disable-line no-inner-declarations
      //   return new Promise((resolve, reject) => {
      //     ks.keyFromPassword(param, (err, data) => {
      //       if (err !== null) return reject(err);
      //       return resolve(data);
      //     });
      //   });
      // }

      // const ks = yield call(createVaultPromise, opt);

      // ks.passwordProvider = (callback) => {
      //   // const password = yield select(makeSelectPassword());
      //   const pw = prompt("Please enter keystore password", "Password"); // eslint-disable-line
      //   callback(null, pw);
      // };

      // const pwDerivedKey = yield call(keyFromPasswordPromise, password);
      // ks.generateNewAddress(pwDerivedKey, 1);

      // const tokenList = yield select(makeSelectTokenInfoList());

      // yield put(generateKeystoreSuccess(ks, tokenList));
      // yield put(loadNetwork(defaultNetwork));
      // yield put(saveWallet());
    } catch (err: any) {
      console.log(err);
      const errorString = err?.message || "Error generating keystore";

      dispatch(snackbarError(errorString));

      throw new Error(errorString);
    }
  }
);
