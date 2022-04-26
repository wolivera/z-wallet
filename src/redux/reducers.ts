/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "@reduxjs/toolkit";
import networksReducer from './network/network.slice';
import walletsReducer from './wallet/wallet.slice';
import snackbarReducer from './snackbar/snackbar.slice';

const rootReducer = combineReducers({
  network: networksReducer,
  wallet: walletsReducer,
  snackbar: snackbarReducer,
});

export default rootReducer;
