import s from './CardItem.module.scss';

export const CardItem = ({ data }) => (
	<article className={`${s.card} ${s.goodscard}`}>
		{data.map((item) => (
			<a href={`/products?/slug=${item}`} className={`${s.link} ${s.cardlinkimg}`}>
				<img src={`/products?/slug=${item}`} alt="фото товара" className={s.cardimg} />
			</a>
		))}
		<div className={s.cardinfo}>

			<h3 className={s.cardtitle}>
				{data.map((item) => (
					<a href={`/products?/slug=${item}`} className={s.link}>{item}</a>
				))}
			</h3>
			{data.map((item) => (
				<p className={s.cardprice}>{item}</p>
			))}

		</div>
		<button className={s.cardbtn}>В корзину</button>
		<button className={s.cardfavorite}>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
				<path d="M8.41331 13.8733C8.18665 13.9533 7.81331 13.9533 7.58665 13.8733C5.65331 13.2133 1.33331 10.46 1.33331 5.79332C1.33331 3.73332 2.99331 2.06665 5.03998 2.06665C6.25331 2.06665 7.32665 2.65332 7.99998 3.55998C8.67331 2.65332 9.75331 2.06665 10.96 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41331 13.8733Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
			</svg>
		</button>
	</article>
)