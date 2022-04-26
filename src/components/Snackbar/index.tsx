import Alert from "@mui/material/Alert";
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { snackbarClear } from "../../redux/snackbar/snackbar.slice";

export const SnackbarNotification = () => {
  const dispatch = useAppDispatch();

  const { snackbarMessage, snackbarOpen, severity } = useAppSelector(
    (state) => state.snackbar
  );

  const handleClose = () => {
    dispatch(snackbarClear());
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={snackbarOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      aria-describedby="client-snackbar"
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};
