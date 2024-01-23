import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { CardItem } from "../../components/CardItem/CardItem";
import { fetchProducts } from "../../store/products/products.slice.js";
import { Container } from "../Container/Container";
import s from "./goods.module.scss";

export const Goods = () => {
  const dispatch = useDispatch();

  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const q = searchParam.get("q");

  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ category, q }));
  }, [dispatch, category, q]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка:{error}</div>;

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
        {!data.lenght ? (
          <ul className={s.list}>
            {data.map((item) => (
              <li className={s.item} key={item.id}>
                <CardItem {...item} />
              </li>
            ))}
          </ul>
        ) : (
          <p>По вашему запросу нечего не найдено</p>
        )}
      </Container>
    </section>
  );
};
