import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { fetchProducts } from "./redux/actions";
import ProductItem from "./components/ProductItem";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const productState = useSelector((state: RootState) => state.productState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <List>
            {productState.products.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                productType={product.productType}
                name={product.name}
                basicDetails={product.basicDetails}
                nutritionalValues={product.nutritionalValues}
              />
            ))}
          </List>
        </Box>
      </Container>
    </Fragment>
  );
}

export default App;
