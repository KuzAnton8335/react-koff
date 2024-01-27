import s from "./CartForm.module.scss";

export const CartForm = () => (
	<form className={s.form}>
		<h3 className={s.subtitle}>Данные для доставки</h3>
		<fieldset className={s.fieldsetInput}>
			<input type="text" className={s.input} name="name" placeholder="Фамилия Имя Отчество" />
			<input type="tel" className={s.input} name="phone" placeholder="Телефон" />
			<input type="email" className={s.input} name="email" placeholder="E-mail" />
			<input type="text" className={s.input} name="address" placeholder="Адрес доставки" />
			<textarea name="comments"
				className={s.textarea} placeholder="Комментарии к заказу"></textarea>
		</fieldset>

		<fieldset className={s.fieldsetRadio}>
			<legend className={s.legend}>Доставка</legend>
			<label className={s.radio}>
				<input type="radio" className={s.radioInput} name="deliveryType" value="delivery"
					required
				/>
				Доставка
			</label>
			<label className={s.radio}>
				<input type="radio" className={s.radioInput} name="deliveryType" value="pickup"
					required
				/>
				Самовывоз
			</label>
		</fieldset>

		<fieldset className={s.fieldsetRadio}>
			<legend className={s.legend}>Оплата</legend>
			<label className={s.radio}>
				<input type="radio" className={s.radioInput} name="paymentType"
					value="card"
					required
				/>
				Картой при получении
			</label>
			<label className={s.radio}>
				<input type="radio" className={s.radioInput} name="paymentType"
					value="cash"
					required
				/>
				Наличными при получении
			</label>
		</fieldset>
	</form>
)
