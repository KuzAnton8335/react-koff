import s from './CartProducts.module.scss';

export const CartProducts = () => {
	return (
		<ul className={s.products}>
			<li className={s.product}>
				<img src="https://koff-api.vercel.app/img//1hb3g24plh60ema3.jpg" alt="Кресло с подлокотниками" className={s.img} />
				<h3 className={s.titleProduct}>Кресло с подлокотниками</h3>
				<p className={s.price}> {"133741".toLocaleString()}&nbsp;₽</p>
				<p className={s.article}>арт. 16955881429</p>

				<div className={s.productControl}>
					<button className={s.productBtn}>-</button>
					<p className={s.productCount}>1</p>
					<button className={s.productBtn}>+</button>
				</div>
			</li>
			<li className={s.product}>
				<img src="https://koff-api.vercel.app/img//1hb3g24plh60ema3.jpg" alt="Кресло с подлокотниками" className={s.img} />
				<h3 className={s.titleProduct}>Кресло с подлокотниками</h3>
				<p className={s.price}> {"133742".toLocaleString()}&nbsp;₽</p>
				<p className={s.article}>арт. 16955881429</p>

				<div className={s.productControl}>
					<button className={s.productBtn}>-</button>
					<p className={s.productCount}>1</p>
					<button className={s.productBtn}>+</button>
				</div>
			</li>
			<li className={s.product}>
				<img src="https://koff-api.vercel.app/img//1hb3g24plh60ema3.jpg" alt="Кресло с подлокотниками" className={s.img} />
				<h3 className={s.titleProduct}>Кресло с подлокотниками</h3>
				<p className={s.price}> {"133743".toLocaleString()}&nbsp;₽</p>
				<p className={s.article}>арт. 16955881429</p>

				<div className={s.productControl}>
					<button className={s.productBtn}>-</button>
					<p className={s.productCount}>1</p>
					<button className={s.productBtn}>+</button>
				</div>
			</li>
		</ul>
	)
}