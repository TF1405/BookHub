import CartButton from '../atoms/cart-button';
import WishlistButton from '../atoms/wishlist-button';

const WishlistAndCart = () => {
	return (
		<div className='flex w-full'>
			<span className='m-auto'>
				<CartButton />
			</span>
			<span className='m-auto'>
				<WishlistButton />
			</span>
		</div>
	);
};

export default WishlistAndCart;
