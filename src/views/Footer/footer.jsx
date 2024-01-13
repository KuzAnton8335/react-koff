import { Contacts } from "../../components/Contacts/Contacts.jsx";
import { Developers } from "../../components/Developers/Developers.jsx";
import { Logo } from "../../components/Logo/Logo.jsx";
import { Container } from "../Container/container.jsx";
import s from "./footer.module.scss";
export const Footer = () =>
(<footer className={s.footer}>
	<Container className={s.container}>
		<div className={s.logo}>
			<Logo />
		</div>
		<div className={s.contacts}>
			<Contacts />
		</div>
		<div className={s.developers}>
			<Developers />
		</div>
		<p className={s.copyright}>© Koff, 2024 </p>
	</Container>
</footer>);
