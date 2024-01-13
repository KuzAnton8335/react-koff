import s from './Developers.module.scss'
export const Developers = () => (
	<div className={s.developers}>
		<ul className={s.list}>
			<li className={s.item}>
				Designer:&nbsp;<a href="#" className={s.link} target='_blank' rel='noreferrer'>Anastasia Ilina</a>
			</li>
			<li className={s.item}>
				Developer:&nbsp;<a href="#" className={s.link} target='_blank' rel='noreferrer'>Anton Kuznecov</a></li>
		</ul>
	</div>
)