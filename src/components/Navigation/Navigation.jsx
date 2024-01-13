import s from "./Navigation.module.scss";
export const Navigation = () => (
	<nav className={s.navigation}>
		<a className={s.link} href="/favorite">
			<span className={s.text}>Избранное</span>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M8.41325 13.8733C8.18658 13.9533 7.81325 13.9533 7.58658 13.8733C5.65325 13.2133 1.33325 10.46 1.33325 5.79332C1.33325 3.73332 2.99325 2.06665 5.03992 2.06665C6.25325 2.06665 7.32658 2.65332 7.99992 3.55998C8.67325 2.65332 9.75325 2.06665 10.9599 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41325 13.8733Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</a>
		<a className={s.link} href="/cart">
			<span className={s.text}>Корзина</span>
			<span>(0)</span>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M5.87329 1.33325L3.45996 3.75325" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M10.1267 1.33325L12.54 3.75325" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M1.33325 5.23324C1.33325 3.9999 1.99325 3.8999 2.81325 3.8999H13.1866C14.0066 3.8999 14.6666 3.9999 14.6666 5.23324C14.6666 6.66657 14.0066 6.56657 13.1866 6.56657H2.81325C1.99325 6.56657 1.33325 6.66657 1.33325 5.23324Z" stroke="currentColor" />
				<path d="M6.50659 9.33325V11.6999" stroke="currentColor" strokeLinecap="round" />
				<path d="M9.57324 9.33325V11.6999" stroke="currentColor" strokeLinecap="round" />
				<path d="M2.33325 6.66675L3.27325 12.4267C3.48659 13.7201 3.99992 14.6667 5.90658 14.6667H9.92659C11.9999 14.6667 12.3066 13.7601 12.5466 12.5067L13.6666 6.66675" stroke="currentColor" strokeLinecap="round" />
			</svg>

		</a>
	</nav>
)