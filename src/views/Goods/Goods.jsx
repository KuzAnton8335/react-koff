import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { CardItem } from "../../components/CardItem/CardItem";
import { Pagination } from "../../components/Pagination/Pagination";
import { fetchProducts } from "../../store/products/products.slice.js";
import { Container } from "../Container/Container";
import s from "./goods.module.scss";


export const Goods = () => {
	const dispatch = useDispatch();
	const { data, loading, error, pagination } = useSelector((state) => state.products);
	const { favoriteList } = useSelector((state) => state.favorite);
	const [searchParam] = useSearchParams();
	const { pathname } = useLocation();
	const category = searchParam.get("category");
	const q = searchParam.get("q");
	const page = searchParam.get("page");



	useEffect(() => {
		if (pathname !== "/favorite") {
			dispatch(fetchProducts({ category, q, page }));
		}
	}, [dispatch, category, q, pathname, page]);

	useEffect(() => {
		if (pathname === "/favorite") {
			dispatch(fetchProducts({ list: favoriteList.join(',') }));
		}
	}, [dispatch, favoriteList, pathname, page]);

	if (loading) return <div>Загрузка...</div>;
	if (error) return <div>Ошибка:{error}</div>;

	return (
		<section className={s.goods}>
			<Container>
				<h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
				{!data.lenght ? (
					<>
						<ul className={s.list}>
							{data.map((item) => (
								<li className={s.item} key={item.id}>
									<CardItem {...item} />
								</li>
							))}
						</ul>
						{pagination ? <Pagination pagination={pagination} /> : ''}
					</>
				) : (
					<p>По вашему запросу нечего не найдено</p>
				)}
			</Container>
		</section>
	);
};
