// type Props = {}

import { Sticky } from "../../components/Content";
import { Footer } from "../../components/Footer";
import { Header } from "../Header";
import { Wallet } from "../Wallet";

export const Home = () => {
  return (
    <div>
      <div style={{ minHeight: 'calc(100vh - 50px)'}} className="min-w-full bg-slate-100">
        <Sticky>
          <Header />
        </Sticky>
        {/* <Header />
          <SubHeader {...subHeaderProps} />
          <GenerateWalletModal {...generateWalletProps} />
          <RestoreWalletModal {...restoreWalletModalProps} />
          <AddressView {...addressViewProps} />
          <SendToken {...sendTokenProps} />
          <TokenChooser {...tokenChooserProps} /> */}
        <Wallet />
      </div>
      <Footer />
    </div>
  );
};
