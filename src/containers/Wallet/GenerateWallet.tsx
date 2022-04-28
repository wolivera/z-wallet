import { Card, DialogTitle, CardContent, Alert, AlertTitle, Dialog, DialogActions, Button, DialogContent, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { AppDispatch, RootState } from "../../redux/store";
import { generateSeed } from "../../redux/wallet/wallet.thunk";

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const GenerateWalletModal = ({ open, onClose, onConfirm }: Props) => {
  const password = useAppSelector((state: RootState) => state.wallet.password);
  const mnemonic = useAppSelector((state: RootState) => state.wallet.mnemonic);

  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    if (open) dispatch(generateSeed());
  }, [dispatch, open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>New Wallet</DialogTitle>
      <DialogContent dividers>
        <Alert severity="warning" className="mb-4">
          <AlertTitle>The seed is imposible to recover if lost</AlertTitle>
          Copy the seed and the password to a safe location
        </Alert>
        <Card>
          <CardContent className="bg-blue-300">
            <Typography color="text.secondary" gutterBottom fontWeight="bold">
              Seed
            </Typography>
            {mnemonic || 'Loading...'}
          </CardContent>
        </Card>
        <Card className="mt-3">
          <CardContent className="bg-blue-300">
            <Typography color="text.secondary" gutterBottom fontWeight="bold">
              Password
            </Typography>
            {password || 'Loading...'}
          </CardContent>
        </Card>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onConfirm}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};
