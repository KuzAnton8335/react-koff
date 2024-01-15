import { Container } from "../../views/Container/Container";
import s from "./Catalog.module.scss";

export const Catalog = ({ data }) => (
  <nav className={s.catalog}>
    <Container className={s.container}>
      <ul className={s.list}>
        {data.map((item, i) => (
          <li className={s.item} key={i}>
            <a href={`/category?/slug=${item}`} className={s.link}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  </nav>
);
