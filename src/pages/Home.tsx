import { useTranslation } from "react-i18next";
import ProductList from "../components/ProductList";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>{t("latestProducts", { count: 10 })}</h2>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Home;
