import { CircularProgress, Grid, Stack, TextField } from "@mui/material";
import { useProducts } from "hooks/products";
import React from "react";
import { useStyles } from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import ProductCard from "components/ProductCard";
import { searchData } from "utils/search";

function Products() {
  const classes = useStyles();
  const { getProductsAction, products, loading } = useProducts();

  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    getProductsAction();
  }, []);

  return (
    <Stack className={classes.products_container}>
      <Stack className={classes.search}>
        <TextField
          sx={{ width: "500px" }}
          placeholder="Search products"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
      </Stack>
      <Grid container>
        <Grid item lg={4} md={5} sm={0} my={4}>
          <Stack className={classes.checkFilter} sx={{ p: 3 }}></Stack>
        </Grid>
        <Grid item lg={8} md={7} sm={12}>
          <Stack
            sx={{ mt: 2, height: "calc(100vh - 200px)", overflowY: "scroll" }}
          >
            <Grid
              container
              spacing={3}
              alignItems="center"
              justifyContent="center"
              p={2}
            >
              {searchData(products, searchQuery).length > 0 ? (
                searchData(products, searchQuery).map((_el, index) => (
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    justifyContent="center"
                    alignItems="center"
                    key={index}
                  >
                    <ProductCard
                      name={_el.name}
                      price={_el.price}
                      imageURL={_el.imageURL}
                      id={_el.id}
                      product={_el}
                    />
                  </Grid>
                ))
              ) : (
                <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
                  No data
                </Stack>
              )}
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Products;
