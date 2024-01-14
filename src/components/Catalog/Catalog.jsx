import { Container } from "../../views/Container/Container";
import s from "./Catalog.module.scss";

export const Catalog = () => (
	<nav className={s.catalog}>
		<Container className={s.container}>
			<ul className={s.list}>
				<li className={s.item}>
					<a href="#" className={s.link}>Диван</a>
				</li>
				<li className={s.item}>
					<a href="#" className={s.link}>Шкафы</a>
				</li>
				<li className={s.item}>
					<a href="#" className={s.link}>Стулья</a>
				</li>
				<li className={s.item}>
					<a href="#" className={s.link}>Тумбы</a>
				</li>
				<li className={s.item}>
					<a href="#" className={s.link}>Кровати</a>
				</li>
				<li className={s.item}>
					<a href="#" className={s.link}>Столы</a>
				</li>
				<li className={s.item}>
					<a href="#" className={s.link}>Комоды</a>
				</li>
				<li className={s.item}>
					<a href="#" className={s.link}>Матрасы</a>
				</li>
				<li className={s.item}>
					<a href="#" className={s.link}>Пуфики</a>
				</li>
				<li className={s.item}>
					<a href="#" className={s.link}>Стеллажи</a>
				</li>
			</ul>
		</Container>
	</nav>);