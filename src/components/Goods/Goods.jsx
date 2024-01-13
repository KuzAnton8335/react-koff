import { CardItem } from "../../components/Card/CardItem";
import { Container } from "../../views/Container/Container";
import s from "./goods.module.scss";

export const Goods = () => (
	<section className={s.goods}>
		<Container>
			<h2 className={`${s.title} visually-hidden`}>Список товаров</h2>

			<ul className={s.list}>
				<li className={s.item}>
					<CardItem />
				</li>
				<li className={s.item}>
					<CardItem />
				</li>
				<li className={s.item}>
					<CardItem />
				</li>
			</ul>
		</Container>
	</section>
)