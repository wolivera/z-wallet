// type Props = {}
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
        <h4 className="text-xl font-black text-white text-center">
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-gray-400 to-blue-500">
            ZWallet
          </span>
        </h4>
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
