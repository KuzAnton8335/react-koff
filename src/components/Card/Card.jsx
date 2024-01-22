import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "swiper/css";
import { fetchProduct } from "../../store/product/product.slice";
import { Container } from "../../views/Container/Container";
import { Slider } from "../Slider/Slider";
import s from "./card.module.scss";

export const Card = () => {
	const { productId } = useParams();
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector((state) => state.product);
	useEffect(() => {
		dispatch(fetchProduct(productId));
	}, [dispatch, productId]);

	if (loading) return <div>Загрузка...</div>;
	if (error) return <div>Ошибка:{error}</div>;

	return (
		<section className={s.card}>
			<Container className={s.container}>
				<h2 className={s.title}>Кресло с подлокотниками</h2>
				<Slider data={data} />
				<div className={s.info}>
					<p className={s.price}>{"5000".toLocaleString()}&nbsp;₽</p>
					<p className={s.article}>арт. 84348945757</p>
					<div className={s.characteristics}>
						<h3 className={s.characteristicsTitle}>Общие характеристики</h3>
						<table className={s.table}>
							<tbody>
								{data?.characteristics.map((item, i) => (
									<tr className={s.row} key={i}>
										<td className={s.field}>{item[0]}</td>
										<td className={s.value}>{item[1]}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className={s.btns}>
						<button className={s.btn}>В корзину</button>
						<button className={s.like}>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z" fill="white" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
					</div>
				</div>
			</Container>
		</section>
	);
};
