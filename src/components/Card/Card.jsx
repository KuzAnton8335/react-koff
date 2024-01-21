
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import 'swiper/css';
import { fetchProduct } from "../../store/product/prosuct.slice.js";
import { Container } from "../../views/Container/Container";
import { Slider } from '../Slider/Slider';
import s from "./card.module.scss";


export const Card = () => {
	const { productId } = useParams()
	const dispath = useDispatch();
	const { data, loading, error } = useSelector(state => state.product);
	useEffect(() => {
		dispath(fetchProduct(productId))
	}, [dispath, productId])

	if (loading) return <div>Загрузка...</div>;
	if (error) return <div>Ошибка:{error}</div>;

	console.log(data);
	return (
		<section className={s.card}>
			<Container className={s.container}>
				<h2 className={s.title}>Кресло с подлокотниками</h2>
				<Slider data={data} />
				<div className={s.info}>
					<p className={s.price}>{"5000".toLocaleString()}&nbsp;₽</p>
					<p className={s.article}>арт. 84348945757</p>
					<div className={s.characteristics}>
						<h3 className={s.characteristic_title}></h3>
					</div>
				</div>
			</Container>
		</section>
	)
};
