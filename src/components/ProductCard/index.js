import { Button, Stack, Typography } from "@mui/material";
import { appColor } from "assets/color";
import { useCart } from "hooks/cart";
import React from "react";
import { useStyles } from "./styles";

const ProductCard = (props) => {
  const { name, imageURL, price, id, product } = props;
  const { addToCartAction } = useCart();
  const classes = useStyles();

  return (
    <Stack className={classes.productsCard}>
      <Stack className={classes.imageHolder}>
        <img src={imageURL} alt="product" />
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Stack>
          <Typography>{name}</Typography>
          <Typography>{price}</Typography>
        </Stack>
        <Stack className={classes.buttonContainer}>
          <Button
            variant="outlined"
            sx={{
              borderColor: appColor.black,
              color: appColor.black,
            }}
            onClick={() => addToCartAction({ id: id, product: product })}
          >
            Add to cart
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductCard;
