import { Catalog } from "../../views/Catalog/Catalog.jsx";
import { Goods } from "../../views/Goods/Goods.jsx";
import s from "./main.module.scss";

export const Main = () => {
  return (
    <main className={s.main}>
      <Catalog data={dataCategories} />
      <Goods data={dataProducts} />
    </main>
  );
};
