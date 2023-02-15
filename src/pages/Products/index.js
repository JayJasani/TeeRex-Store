import { Grid, Stack, TextField } from "@mui/material";
import { useProducts } from "hooks/products";
import React from "react";
import { useStyles } from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import ProductCard from "components/ProductCard";

function Products() {
  const classes = useStyles();
  const { getProductsAction, products, loading } = useProducts();

  React.useEffect(() => {
    getProductsAction();
  }, []);

  return (
    <Stack className={classes.products_container}>
      <Grid container>
        <Grid item lg={4} md={5} sm={0}></Grid>
        <Grid item lg={8} md={7} sm={12}>
          <Stack className={classes.search}>
            <TextField
              sx={{ width: "500px" }}
              placeholder="Search products"
              InputProps={{
                endAdornment: <SearchIcon />,
              }}
            />
          </Stack>
          <Stack sx={{ mt: 4 }}>
            <Grid container spacing={3}>
              {products.map((_el, index) => (
                <Grid
                  item
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  justifyContent="center"
                  alignItems="center"
                >
                  <ProductCard
                    key={index}
                    name={_el.name}
                    price={_el.price}
                    imageURL={_el.imageURL}
                  />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Products;
