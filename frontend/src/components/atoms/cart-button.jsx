import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PopUp from './pop-up';

const CartButton = () => {
	return (
		<div className='relative'>
			<button className='h-12 hover:text-secondary duration-300 text-white font-semibold px-2 rounded-lg'>
				<ShoppingCartOutlinedIcon />
			</button>
			<div>
				<PopUp />
			</div>
		</div>
	);
};

export default CartButton;
