import { Product } from "../types/types";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const ProductItem: React.FC<Product> = (product) => {
  const xxx = product.id;

  return (
    <ListItem disablePadding>
      <ListItemButton component="a">
        <ListItemText primary={xxx} />
        <ListItemText primary="Spam" />
        <ListItemText primary="Spam" />
      </ListItemButton>
    </ListItem>
  );
};

export default ProductItem;
