import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PopUp from './pop-up';

const WishlistButton = () => {
	return (
		<div className='relative'>
			<button className='relative h-12 hover:text-secondary duration-300 text-white font-semibold px-2 rounded-lg'>
				<FavoriteBorderIcon />
			</button>
			<div>
				<PopUp />
			</div>
		</div>
	);
};

export default WishlistButton;
