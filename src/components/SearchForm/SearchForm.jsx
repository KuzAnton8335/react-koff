import s from "./SearchForm.module.scss";
export const SearchForm = () => (
	<form className={s.form}>
		<input type="search" name="search" className={s.input} placeholder="Введите запрос" />
		<button className={s.button} type="submit">
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7.66683 13.9999C11.1646 13.9999 14.0002 11.1644 14.0002 7.66659C14.0002 4.16878 11.1646 1.33325 7.66683 1.33325C4.16903 1.33325 1.3335 4.16878 1.3335 7.66659C1.3335 11.1644 4.16903 13.9999 7.66683 13.9999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M14.6668 14.6666L13.3335 13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</button>
	</form>
)