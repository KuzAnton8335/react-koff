import { Logo } from "../../components/Logo/Logo.jsx";
import { Navigation } from "../../components/Navigation/Navigation.jsx";
import { SearchForm } from "../../components/SearchForm/SearchForm.jsx";
import { Container } from "../Container/container.jsx";
import s from "./Header.module.scss";

export const Header = () => (
  <header className={s.header}>
    <Container className={s.container}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.search}>
        <SearchForm />
      </div>
      <div className={s.navigation}>
        <Navigation />
      </div>
    </Container>
  </header>
);
