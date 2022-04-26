import { Button } from "@mui/material";
import { useState } from "react";
import { Body } from "../../components/Content";
import { GradientText } from "../../components/Text";
import { useAppDispatch } from "../../redux/hooks";
import { AppDispatch } from "../../redux/store";
import { generateKeystore } from "../../redux/wallet/wallet.thunk";
import { GenerateWalletModal } from "./GenerateWallet";

export const Wallet = () => {
  const dispatch: AppDispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  const handleNewWallet = () => {
    setOpen(true);
  };

  const handleCloseNewWallet = () => {
    setOpen(false);
  }

  const handleGenerateKeystore = () => {
    console.log("Generate keystore");
    dispatch(generateKeystore());
  }

  return (
    <Body className="flex-col translate-y-[50%]">
      <div className="mt-5">
        <h2 className="text-xl mb-10 font-bold"><GradientText text="Welcome to ZWallet" /></h2>
        <h4 className="mb-5 mt-4 font-bold text-center">To begin, create or restore your Ethereum wallet</h4>
        <p className="text-slate-400 text-center">
          Keystore is encrypted using the password. When the wallet is locked,
          you can only view balances. <br/> All keys are saved inside the browser and
          never sent.
        </p>
      </div>
      <div className="p-5 flex justify-center m-auto mt-5">
        <div className="mr-5">
          <Button
            aria-haspopup="true"
            variant="contained"
            disableElevation
            onClick={handleNewWallet}
          >
            New Wallet
          </Button>
        </div>
        <Button
          aria-haspopup="true"
          variant="outlined"
          disableElevation
          onClick={handleNewWallet}
        >
          Restore Wallet
        </Button>
      </div>
      <GenerateWalletModal open={open} onClose={handleCloseNewWallet} onConfirm={handleGenerateKeystore} />
    </Body>
  );
};
