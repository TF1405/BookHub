import Logo from '../atoms/logo';
import AuthButton from '../molecules/auth-button';
import SearchBar from '../molecules/search-bar';
import WishlistAndCart from '../molecules/wishlist-cart';

const Header = () => {
	return (
		<div className='flex bg-primary px-4 py-2 w-full'>
			<div className='w-[20%]'>
				<Logo />
			</div>
			<div className='w-[50%]'>
				<SearchBar />
			</div>
			<div className='w-[10%]'>
				<WishlistAndCart />
			</div>
			<div className='w-[20%] flex'>
				<AuthButton />
			</div>
		</div>
	);
};

export default Header;
