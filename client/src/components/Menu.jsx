import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import { ProductsContext } from "./context/Allproducts";
export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { sortBy } = React.useContext(ProductsContext);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (sort) => {
    setAnchorEl(null);
    sortBy(sort);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ViewHeadlineIcon style={{ color: "black" }} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={() => handleClose("asc")}>Ascending</MenuItem>
        <MenuItem onClick={() => handleClose("dsc")}>Descending</MenuItem>
      </Menu>
    </div>
  );
}
