import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { ProductState } from "../redux/slices/productSlice";
//import { Product } from "../types/types";

const ProductList: React.FC = () => {
  const state: ProductState = useSelector(
    (state: RootState) => state.productState
  );

  return (
    <ul>
      {state.products.map((product) => (
        <li>
          {" "}
          {product.id} {product.name}
        </li>
      ))}
      <li>xxx</li>
    </ul>
  );
};

export default ProductList;
