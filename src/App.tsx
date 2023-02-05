import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import { AppDispatch, RootState } from "./redux/store";
import { fetchProducts } from "./redux/actions";
import { useTypedSelector } from "./redux/store";

import ProductItem from "./components/ProductItem";

import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const productState = useSelector((state: RootState) => state.productState);
  //const handleClick = () => dispatch(fetchProducts());

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <List>
            {productState.products.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                name={product.name}
              />
            ))}
          </List>
        </Box>
      </Container>
    </Fragment>
  );
}

export default App;
