import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Catalog } from "../../components/Catalog/Catalog";
import { Goods } from "../../components/Goods/Goods";
import { fetchCategories } from "../../store/categories/categories.slice.js";
import { fetchProducts } from "../../store/products/prosucts.slice.js";

export const Main = () => {
	const dispatch = useDispatch();
	const {
		data: dataCategories,
		loading: loadingCategories,
		error: errorCategories,
	} = useSelector((state) => state.categories);

	const {
		data: dataProducts,
		loading: loadingProducts,
		error: errorProducts,
	} = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(fetchCategories());
		dispatch(fetchProducts());
	}, [dispatch]);

	if (loadingCategories || loadingProducts) return <div>Загрузка...</div>;
	if (errorCategories) return <div>Ошибка:{errorCategories}</div>;
	if (errorProducts) return <div>Ошибка:{errorProducts}</div>

	return (
		<main>
			<Catalog data={dataCategories} />
			<Goods data={dataProducts} />
		</main>
	);
};
