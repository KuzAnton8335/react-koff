import { Link } from "react-router-dom";
import s from "./Logo.module.scss";
export const Logo = () => (
  <Link to="/" className={s.link}>
    <img
      className={s.img}
      src="/img/logo.svg"
      alt="Логотпи мебельного магазина Koff"
    />
  </Link>
);
