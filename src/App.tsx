import { Fragment } from "react";
import { useDispatch } from "react-redux";
import ProductList from "./components/ProductList";
import { fetchTodos } from "./redux/actions";
import { AppDispatch } from "./redux/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => dispatch(fetchTodos());

  return (
    <Fragment>
      <button className="btn" onClick={handleClick}>
        Load stuff
      </button>
      <ProductList></ProductList>
    </Fragment>
  );
}

export default App;
