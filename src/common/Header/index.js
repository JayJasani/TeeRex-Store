import { Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useStyles } from "./styles";
import { appColor } from "assets/color";
import { useCart } from "hooks/cart";

const Header = (props) => {
  const classes = useStyles();
  const { cartData } = useCart();

  return (
    <Stack className={classes.header_main}>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mx: 4,
          my: "auto",
        }}
      >
        <Typography sx={{ color: "white", fontSize: 18 }}>
          TeeRex Store
        </Typography>
        <Stack className={classes.list_nav} sx={{ flexDirection: "row" }}>
          <Link to="/">Products</Link>
          <Link to="/cart">
            <Stack sx={{ position: "relative" }}>
              <ShoppingCartIcon />
              <Stack
                sx={{
                  width: "13px",
                  height: "13px",
                  borderRadius: "50px",
                  background: appColor.red,
                  position: "absolute",
                  top: -3,
                  right: -1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                }}
              >
                {cartData && cartData.length}
              </Stack>
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default memo(Header);
