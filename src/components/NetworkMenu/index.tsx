import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Network } from "../../redux/network/network.slice";

type Props = {
  networks: Network[];
  selectedNetwork?: Network;
  onLoadNetwork: (network: Network) => void;
};

export const NetworkMenu = ({ networks, selectedNetwork, onLoadNetwork }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (index: number) => {
    onLoadNetwork(networks[index]);
    handleClose();
  }

  return (
    <div>
      <Button
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {selectedNetwork?.name || 'Select Network'}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {networks.map((network, index) => (
          <MenuItem key={index} onClick={() => handleMenuItemClick(index)} disableRipple>
            {network.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
