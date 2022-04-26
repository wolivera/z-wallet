// type Props = {}
import Logo from "../../assets/logo2.png";
import { Body } from "../../components/Content";
import { NetworkMenu } from "../../components/NetworkMenu";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Network } from "../../redux/network/network.slice";
import { loadNetwork } from "../../redux/network/network.thunk";
import { AppDispatch, RootState } from "../../redux/store";

export const Header = () => {
  const networks = useAppSelector((state: RootState) => state.network.availableNetworks);
  const selectedNetwork = useAppSelector((state: RootState) => state.network.selectedNetwork)
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <Body>
      <div>
        <img className="h-[50px] rounded-md" alt="Logo" src={Logo} />
      </div>
      <div>
        <NetworkMenu
          networks={networks}
          selectedNetwork={selectedNetwork}
          onLoadNetwork={(network: Network) =>
            dispatch(loadNetwork({ network }))
          }
        />
      </div>
    </Body>
  );
};
