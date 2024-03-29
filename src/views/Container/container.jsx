import c from "./container.module.scss";
export const Container = (props) =>
  props.className ? (
    <div className={`${c.container} ${props.className}`}>{props.children}</div>
  ) : (
    <div className={c.container}>{props.children}</div>
  );
