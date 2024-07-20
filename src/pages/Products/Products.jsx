import "./About.css";
import { Link, Outlet } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <div className="products">
        <div className="productsCard">
          <div className="links">
            <Link  to={"farmingProducts"}  >
              <button className="productsButton"> Çiftlik Ürünleri</button>
            </Link>
            <Link to={"animalProducts"}>
              <button className="productsButton">Et ürünleri</button>
            </Link>
          </div>
          <Outlet />
        
        </div>
      </div>
    </div>
  );
};

export default Products;
