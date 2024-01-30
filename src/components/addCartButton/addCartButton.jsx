import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../store/cart/cart.slice";
export const AddCartButton = ({className, id}) => {
	const dispatch = useDispatch();
	const product = useSelector(state => state.cart.products);

	const isCart = product.find(item => item.id === id);

	const handleButton = () => {
		if (!isCart) {
			dispatch(addProductToCart({
				productId: id,
				quantity: 1,
			}))
		}
	}

	return (
		<button className={className} onClick={handleButton}>
			{isCart ? 'Из корзины' : 'В корзину'}
		</button>
	)
}

