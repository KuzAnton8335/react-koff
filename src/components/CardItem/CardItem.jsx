import { Link } from "react-router-dom";
import { API_URL } from "../../const.js";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton.jsx";
import { AddCartButton } from "../addCartButton/addCartButton.jsx";
import s from "./CardItem.module.scss";

export const CardItem = ({ name, images: [image], price, id }) => (
	<article className={s.card}>
		<Link to={`/product/${id}`} className={`${s.link}`}>
			<img src={`${API_URL}${image}`} alt={name} className={s.img} />
		</Link>
		<div className={s.info}>
			<h3 className={s.title}>
				<Link to={`/product/${id}`} className={`${s.link}`}>
					{name}
				</Link>
			</h3>
			<p className={s.price}>{price.toLocaleString()}&nbsp;₽</p>
		</div>
		<AddCartButton className={s.btn} id={id} />
		<FavoriteButton className={s.favorite} id={id} />
	</article>
);
