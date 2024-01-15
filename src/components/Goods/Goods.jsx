import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";
import s from "./goods.module.scss";


export const Goods = ({ data }) => (
	<section className={s.goods}>
		<Container>
			<h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
			<ul className={s.list}>
				{data.map((i) => (
					<li className={s.item} key={i}>
						<CardItem />
					</li>
				))}
			</ul>
		</Container>
	</section>
)