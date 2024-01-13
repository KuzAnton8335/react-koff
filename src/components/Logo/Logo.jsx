import s from "./Logo.module.scss";
export const Logo = () => (
	<a href="/">
		<img className={s.img} src="/img/logo.svg" alt="Логотпи мебельного магазина Koff" />
	</a>
);
