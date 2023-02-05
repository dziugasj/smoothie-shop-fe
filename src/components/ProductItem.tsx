import { Product } from "../types/types";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const ProductItem: React.FC<Product> = (product) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a">
        <ListItemText primary={product.name} />
        <ListItemText primary={product.basicDetails} />
      </ListItemButton>
    </ListItem>
  );
};

export default ProductItem;
